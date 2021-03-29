/* global chrome */
import ButtonGroup from "./buttonGroup";
import {useState} from "react";

const DebugInfo = () => {
    const [isChecked, setChecked] = useState(null);

    if (isChecked === null) {
        if (!chrome.storage) setChecked(true);

        (async () => {
            chrome.storage.local.get("showDebug", res => {
                if ("showDebug" in res) res = res.showDebug;

                if (typeof res !== "object" || Object.keys(res).length === 0) setChecked(false);
                setChecked(res);
            })
        })();
    }

    const invert = () => {
        if (!chrome.storage) return setChecked(!isChecked);

        chrome.storage.local.set({showDebug : !isChecked}, () => {
            setChecked(!isChecked);
            window.location.reload();
        });
    }

    return <ButtonGroup description={"Debug info"} text={isChecked ? "Disable" : "Enable"} oc={invert}/>;
}

export default DebugInfo;