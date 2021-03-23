/* global chrome */
import presetsIndex from "./presetsIndex";
import {Button} from "../../_components/components";

const handleFn = (data) => {
    chrome.storage.local.set({sceneData : data}, () => {
        window.location.reload();
    });
}

const Preset = ({data, name}) => {
    return <Button style={{marginRight: "5px"}} onClick={() => handleFn(data)}>
        {name}
    </Button>
}

const map = () => {
    let out = [];

    for (let key in presetsIndex) {
        out.push(<Preset data={presetsIndex[key]} name={key} key={key}/>);
    }

    return out;
}

const Presets = () => {
    return <div>
        <h4>Presets</h4>
        <div style={{lineHeight : "2"}}>
            {map()}
        </div>
    </div>
}

export default Presets;