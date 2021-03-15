import boxStyle from "../overlay.module.css"
import {useState} from "react"
import componentStyle from "../overlayComponents.module.css"
import {MdSettings} from "react-icons/all";
import JSONControl from "./jsonControl";
import Presets from "./presets";

const SettingsDiv = ({setShowDiv}) => {
    return <div className={boxStyle.smallOverlayBox}>
        <h2 className={boxStyle.heading}> Settings </h2>
        <p>
            The entities which are rendered in the scene can be edited by using the scene editor, and downloaded or
            uploaded in JSON files.
        </p>

        <JSONControl/>
        <Presets/>

        <button className={componentStyle.button}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px"
                }}
                onClick={() => setShowDiv(false)}
        >
            Close
        </button>
    </div>
}

const Settings = () => {
    let [showDiv, setShowDiv] = useState(false);

    return <div>
        <button className={componentStyle.button}
                onClick={() => setShowDiv(true)}
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
        </button>
        {showDiv ? <SettingsDiv setShowDiv={setShowDiv}/> : null}
    </div>
}

export default Settings;