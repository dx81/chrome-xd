import GEN from "../gen";
import ObjectComponent from "./objectComponent";
import style from "./editorComponents.module.css"

//TODO: implement "add" button
//TODO: implement arrays as own and not part of object
//TODO: implement change handling (adding of elements)

const ArrayComponent = ({name, path, data}) => {
    return <ObjectComponent name={name} path={path} data={data}/>
}

export default ArrayComponent;