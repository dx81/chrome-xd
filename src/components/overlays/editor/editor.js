import workaround from "./workaround";
import {LargeOverlayBox, CloseDiv, Button, Heading} from "../_components/components";
import backend from "../../../code/backend";
import ObjectComponent from "./components/objectComponent";
workaround();

const SceneEditor = ({setOpen}) => {
    return <LargeOverlayBox>
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