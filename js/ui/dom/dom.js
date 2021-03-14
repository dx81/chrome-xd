import * as boxBindings from "./boxBindings.js"

const DOMBindings = {
    settingsOpenButton: ["click", boxBindings.show("settingsDiv")],
    settingsCloseButton : ["click", boxBindings.hide("settingsDiv")]
};

export default () => {
    for (let key in DOMBindings) {
        document.getElementById(key).addEventListener(DOMBindings[key][0], DOMBindings[key][1]);
    }
}