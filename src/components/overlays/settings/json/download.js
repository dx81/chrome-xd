/* global chrome */
import ButtonGroup from "./buttonGroup";
import fileDownload from "js-file-download";

const downloadFn = () => {
    chrome.storage.local.get("sceneData", res => {
        if ("sceneData" in res) res = res.sceneData;

        fileDownload(JSON.stringify(res), "scene.json");
    })
}

const DownloadBtn = () => {
    return <div>
        <ButtonGroup text={"Download"} description="Current JSON" oc={downloadFn}/>
    </div>
}

export default DownloadBtn;