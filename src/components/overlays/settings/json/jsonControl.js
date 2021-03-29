import UploadBtn from "./upload";
import DownloadBtn from "./download";
import SceneEditorBtn from "./scene";
import ClearBtn from "./clear";
import DebugInfo from "./debugInfo";

const JSONControl = () => {
    return <div>
        <SceneEditorBtn/>
        <UploadBtn/>
        <DownloadBtn/>
        <ClearBtn/>
        <DebugInfo/>
    </div>
}

export default JSONControl;