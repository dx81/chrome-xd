import {LargeOverlayBox, CloseDiv, Button, Heading} from "../_components/components";
import {TreeNode} from "./components/editorComponents";

const SceneEditor = ({setOpen}) => {
    return <LargeOverlayBox>
        <Heading>
            Scene Editor
        </Heading>

        <TreeNode name={"test node"}>
            test
        </TreeNode>

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