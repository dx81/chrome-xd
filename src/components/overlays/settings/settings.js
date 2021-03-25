import {useState} from "react"
import React from "react";
import {MdSettings} from "react-icons/all";
import {Button, SmallOverlayBox, Heading, Spacer, CloseDiv} from "../_components/components";
import JSONControl from "./json/jsonControl";
import Presets from "./presets/presets";

const SettingsHeader = () => {
    return <React.Fragment>
        <Heading> Settings </Heading>
        <p>
            The entities which are rendered in the scene can be edited by using the scene editor, and downloaded or
            uploaded in JSON files.
        </p>
    </React.Fragment>
}

const SettingsDiv = ({setShowDiv}) => {
    return <SmallOverlayBox style={{background : "rgba(0, 0, 0, 0.8)"}}>
        <SettingsHeader/>
        <Spacer/>

        <CloseDiv>
            <Button onClick={() => setShowDiv(false)}>
                Close
            </Button>
        </CloseDiv>

        <JSONControl/>
        <Presets/>
    </SmallOverlayBox>
}

const Settings = () => {
    let [showDiv, setShowDiv] = useState(false);

    return <div>
        <Button onClick={() => setShowDiv(true)}
                style={{
                    position: "absolute",
                    right: "0.5%",
                    bottom: "1%",

                    background: "transparent",
                    border: "1px solid black",
                    fontSize: "large"
                }}
        >
            <MdSettings color="#ffffff"/>
        </Button>
        {showDiv ? <SettingsDiv setShowDiv={setShowDiv}/> : null}
    </div>
}

export default Settings;