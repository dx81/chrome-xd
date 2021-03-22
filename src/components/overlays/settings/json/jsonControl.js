import UploadBtn from "./upload";
import DownloadBtn from "./download";
import SceneEditorBtn from "./scene";
import ClearBtn from "./clear";

const JSONControl = () => {
    return <div>
        <SceneEditorBtn/>
        <UploadBtn/>
        <DownloadBtn/>
        <ClearBtn/>
    </div>
}

export default JSONControl;