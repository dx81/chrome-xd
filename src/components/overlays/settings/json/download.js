import ButtonGroup from "./buttonGroup";

//TODO: fix
const DownloadBtn = () => {
    return <div>
        <ButtonGroup text={"Download"} description="Current JSON" oc={() => {
            alert("Not implemented");
        }}/>
    </div>
}

export default DownloadBtn;