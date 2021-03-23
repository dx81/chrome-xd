/* global chrome */
import ButtonGroup from "./buttonGroup";
import backend from "../../../../code/backend";

const clearFn = () => {
    chrome.storage.local.remove("sceneData", () => {
        //window.location.reload();

        chrome.storage.local.remove("selectedPreset", () => {
            backend.presetClear();
            backend.hotReload({});
        })
    })
}

const ClearBtn = () => {
    return <ButtonGroup text="Clear" description="Currently loaded JSON" oc={clearFn}/>
}

export default ClearBtn;
