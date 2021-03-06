/* global chrome */
import defaultJSON from "./defaultJSON";
import brokeJSON from "./brokeJSON";

import Engine from "../engine-xd/src/engine.js";

const N = (x, n) => Array(n).fill(x);

const backend = new class {
    chromeJSON;
    error;
    presetClearFn;
    engine;

    constructor () {
        this.error = {
            errored : false,
            msg : ""
        }
    }

    async loadJSON () {
        if (!chrome.storage) {
            return brokeJSON;
        }

        return await new Promise((resolve) => {
            chrome.storage.local.get("sceneData", res => {
                if ("sceneData" in res) res = res.sceneData;

                if (typeof res !== "object" || Object.keys(res).length === 0) resolve(defaultJSON);
                resolve(res);
            })
        })
    }

    async loadEnableDebugBool () {
        if (!chrome.storage) {
            return true;
        }

        return await new Promise((resolve) => {
            chrome.storage.local.get("showDebug", res => {
                if ("showDebug" in res) res = res.showDebug;

                if (typeof res !== "boolean") resolve(false);
                resolve(res);
            })
        })
    }

    throw (msg) {
        this.error.errored = true;
        this.msg = msg;
    }

    async init (reacc) {
        //init code
        //example: validate

        reacc(true);
    }

    async onload () {
        this.chromeJSON = await this.loadJSON();
        const enableDebugInfo = await this.loadEnableDebugBool();

        console.log(enableDebugInfo)

        const display = new Engine.Displays.Canvas("main", {
            size: [ window.innerWidth, window.innerHeight ],
            viewport: { height: 1000 }
        });
        const scene = [];
        this.engine = new Engine(scene, [ display ]);

        this.engine.addEntity(new Engine.Entity({
            camera: {
                cameraZ: 250,
                isometric: false,
            },
        }));

        let scale = 100;
        let dimensions = 4;
        let axes = (dimensions * (dimensions - 1)) / 2;

        this.engine.addEntity(new Engine.Entity({
            transform: {
                position: [ 0, 0, - (scale * (dimensions - 2)), 0, 0, 0, 0, 0, 0, 0 ],
                // position: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                scale: N(scale, dimensions),
            },
            renderer: {
                renderVertices: false,
            },
            shaders: "parallel",
            geometry: Engine.Components.Geometry.Hypercube(dimensions),
            scripts: [
                { name: "spin", args: [ N(0.1, axes) ] },
                { name: "control", args: [ 100, 0.5 ] }
            ],
        }));

        if (enableDebugInfo) {
            this.engine.addEntity(new Engine.Entity({
                scripts: [
                    { name: "stats", args: [ [ { id: "debugInfo", index: 0 } ] ] },
                ],
            }));
        }

        console.log(this.engine.scene);

        this.engine.start();

        window.addEventListener("resize", () => {
            display.resize([ window.innerWidth, window.innerHeight ]);
        });
    }

    hotReload (json) {
        if (typeof json !== "object" || Object.keys(json).length === 0) json = defaultJSON;

        console.log(json);
    }

    onPresetClear (fn) {
        this.presetClearFn = fn;
    }

    presetClear () {
        this.presetClearFn();
    }
}();

export default backend;