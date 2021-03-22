import {LargeOverlayBox, CloseButton} from "../_components/components";

const SceneEditor = ({setOpen}) => {
    return <LargeOverlayBox>
        test

        <CloseButton onClick={() => setOpen(false)}>
            Close
        </CloseButton>
    </LargeOverlayBox>
}

export default SceneEditor;