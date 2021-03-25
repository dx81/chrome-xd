/* global chrome */
import presetsIndex from "./presetsIndex";
import {Button} from "../../_components/components";
import backend from "../../../../code/backend";
import {useState} from "react";

let presetLoaded = "";
if (chrome.storage) {
    chrome.storage.local.get("selectedPreset", res => {
        if ("selectedPreset" in res) res = res.selectedPreset;
        presetLoaded = res;
    })
}

const handleFn = (data, setFn, name) => {
    chrome.storage.local.set({sceneData : data}, () => {
        //window.location.reload();

        backend.hotReload(data);
    });

    chrome.storage.local.set({selectedPreset : name}, () => {
        setFn(name);
    })
}

const Preset = ({data, name, selected, setSelected}) => {
    let styleToUse = {};
    if (selected) styleToUse = {border : "solid 1px red"};

    return <Button onClick={() => handleFn(data, setSelected, name)}
                   style={styleToUse}
    >
        {name}
    </Button>
}

const map = (setSelected, selected) => {
    let out = [];
    backend.onPresetClear(() => {setSelected("")});

    for (let key in presetsIndex) {
        out.push(<Preset data={presetsIndex[key]} name={key} key={key} selected={key === selected} setSelected={setSelected}/>);
    }

    return out;
}

const Presets = () => {
    const [selected, setSelected] = useState(presetLoaded);

    return <div>
        <h4>Presets</h4>
        <div style={{lineHeight : "2"}}>
            {map(setSelected, selected)}
        </div>
    </div>
}

export default Presets;