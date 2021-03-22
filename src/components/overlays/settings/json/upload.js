/* global chrome */
import {button as btnCss} from "../../_components/overlayComponents.module.css";

function processData (data) {
    data = data.target.result;
    let jsonData;

    try {
        jsonData = JSON.parse(data);
    } catch (e) {
        alert(`This file is not valid JSON.\nError: ${e}`);
        return;
    }

    chrome.storage.local.set({sceneData : jsonData}, () => {
        window.location.reload();
    });
}

function updateFn (e) {
    let files = e.target.files
    let file = files[files.length - 1];

    if (file.type !== "application/json") {
        alert("Only json files are supported. This file has the type " + file.type);
        return;
    }

    const fileReader = new FileReader();
    fileReader.addEventListener("load", processData);

    fileReader.readAsText(file);
}

const UploadBtn = () => {
    return <div style={{paddingBottom: "3px"}}>
        <label className={btnCss}
               style={{width : "98px", marginRight : "10px", height : "18px", display : "inline-block", textAlign : "center"}}
               htmlFor="fileUploadJSONSettings"
        > Upload </label>
        <input id="fileUploadJSONSettings" type="file" accept=".json" style={{display : "none"}} onChange={updateFn}/>
        <label>Replace the current JSON</label>
    </div>;
}

export default UploadBtn;