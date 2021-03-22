import validate from "./validate"

const backend = new class {
    chromeJSON;
    error;

    constructor () {
        this.error = {
            errored : false,
            msg : ""
        }


    }

    async init (acFn) {
        this.chromeJSON = await this.loadJSON();

        let {valid, error} = validate(this.chromeJSON);
        if (!valid) {
            this.error.errored = true;
            this.error.msg = error;

            //TODO: set default
            this.chromeJSON = {};
        }


        //TODO: validate and set error, await engine init, set engine instance to this.engine

        acFn(true);
    }

    async loadJSON () {
        //get from chrome
    }
}();

export default backend;