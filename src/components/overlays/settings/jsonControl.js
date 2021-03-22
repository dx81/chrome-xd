/* global chrome */
import {Button} from "../_components/components";
import {button as btnCss} from "../_components/overlayComponents.module.css";

const ButtonGroup = ({text, description, oc}) => {
    return <div style={{paddingBottom: "3px"}}>
        <Button style={{width: "100px", marginRight: "10px"}} onClick={oc}> {text} </Button>
        {description}
    </div>
}

function updateFn () {
    let file = this.files[this.files.length - 1];

    if (file.type !== "application/json") {
        alert("Only json files are supported. This file has the type " + file.type);
        return;
    }

    const fileReader = new FileReader();
    fileReader.addEventListener("load", (data) => {
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
    });

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

//TODO: fix
const DownloadBtn = () => {
    return <ButtonGroup text={
        <a href="/"
           style={{color: "white", textDecoration : "none", width: "100%", display : "inline-block"}}
           id="downloadButtonLinkJSON"
           onFocus={function () {
               document.getElementById("downloadButtonLinkJSON").setAttribute("href", "https://www.google.com")
           }}
        >
            Download
        </a>
    } description="Current JSON" oc={() => {}}/>
}

const SceneEditorBtn = () => {
    return <div>
        {/* scene editor */}
        <ButtonGroup text="Open" description="Scene editor"/>
    </div>
}

const ClearBtn = () => {
    return <ButtonGroup text="Clear" description="Currently loaded JSON"/>
}

const JSONControl = () => {
    return <div>
        <SceneEditorBtn/>
        <UploadBtn/>
        <DownloadBtn/>
        <ClearBtn/>
    </div>
}

export default JSONControl;