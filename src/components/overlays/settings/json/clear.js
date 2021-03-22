/* global chrome */
import ButtonGroup from "./buttonGroup";

const clearFn = () => {
    chrome.storage.local.remove("sceneData", () => {
        window.location.reload();
    })
}

const ClearBtn = () => {
    return <ButtonGroup text="Clear" description="Currently loaded JSON" oc={clearFn}/>
}

export default ClearBtn;
