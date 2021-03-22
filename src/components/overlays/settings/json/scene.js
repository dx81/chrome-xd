import ButtonGroup from "./buttonGroup";
import {useState} from "react";
import SceneEditor from "../../editor/editor";

const SceneEditorBtn = () => {
    const [showEditor, setShowEditor] = useState(false);

    return <div>
        {!showEditor ? null : <SceneEditor setOpen={setShowEditor}/>}
        <ButtonGroup text="Open" description="Scene editor" oc={() => setShowEditor(true)}/>
    </div>
}

export default SceneEditorBtn;