/* global chrome */
import defaultJSON from "./defaultJSON";
import brokeJSON from "./brokeJSON"

const backend = new class {
    chromeJSON;
    error;

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

        await new Promise((resolve) => {
            chrome.storage.local.get("sceneData", res => {
                if ("sceneData" in res) res = res.sceneData;

                if (Object.keys(res).length === 0) resolve(defaultJSON);
                resolve(res);
            })
        })
    }

    throw (msg) {
        this.error.errored = true;
        this.msg = msg;
    }

    async init (reacc) {
        this.chromeJSON = await this.loadJSON();



        reacc(true);
    }
}();

export default backend;