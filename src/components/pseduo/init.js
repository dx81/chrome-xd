import Error from "../overlays/error/error";
import backend from "../../code/backend"

const Init = () => {
    if (!backend.error.errored) return null;
    return <Error text={backend.error.msg}/>;
}

export default Init;