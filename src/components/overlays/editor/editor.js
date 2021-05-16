import workaround from "./workaround";
import {LargeOverlayBox, CloseDiv, Button, Heading} from "../_components/components";
import backend from "../../../code/backend";
import ObjectComponent from "./components/objectComponent";
workaround();

//TODO: add on-close warning

const SceneEditor = ({setOpen}) => {
    return <LargeOverlayBox style={{background : "rgba(0, 0, 0, 0.95)"}}>
        <Heading>
            Scene Editor
        </Heading>

        <ObjectComponent name="Scene" data={backend.engine.scene} path={[]}/>

        <CloseDiv>
            <Button>
                Save
            </Button>

            <Button onClick={() => setOpen(false)}>
                Close
            </Button>
        </CloseDiv>
    </LargeOverlayBox>
}

export default SceneEditor;

//<ArrayComponent treeTLD name="tld" data={backend.engine.scene} path={[]}/>