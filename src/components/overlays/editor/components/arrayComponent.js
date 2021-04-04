import ObjectBase from "./objectBasedComponent";
import GEN from "../gen";
import {Button} from "../../_components/components";
import style from "./editorComponents.module.css"
import backend from "../../../../code/backend";
import react from "react";

let updateLowerFn;

const keyWrapper = (array, name) => {
    array = [...array, name];
    array.shift();

    return array;
}

const RemoveButton = ({path, name}) => {
    return <Button onClick={() => {
        let input = Number(prompt("Index to remove at (0..n)", "0"));
        if (isNaN(input)) return alert("Not an number");

        let array = backend.engine.api.get(keyWrapper(path, name));
        array.splice(input, 1);

        updateLowerFn();
    }}>
        <i>Remove</i>
    </Button>
}

const AddContent = ({path, name, added, setAdded}) => {
    return <Button className={style.standardPadding} onClick={() => {
        let defaultElement = { test : true };

        let array = backend.engine.api.get(keyWrapper(path, name));
        array.push(defaultElement);

        setAdded([...added, GEN(defaultElement, [...path, name], array.length - 1)]);
    }}>
        <i>Add</i>
    </Button>
}

const ArrayOperations = ({path, name}) => {
    const [added, setAdded] = react.useState([]);

    return <react.Fragment>
        {added}
        <div>
            <AddContent path={path} name={name} added={added} setAdded={setAdded}/>
            <RemoveButton path={path} name={name}/>
        </div>
    </react.Fragment>
}

const ArrayComponent = ({name, path, data}) => {
    const pushHookUp = (fn) => {
        updateLowerFn = fn;
    }

    return <ObjectBase name={name}
                       path={path}
                       data={data}
                       pushFn={pushHookUp}
                       displayName={`[ ${name} ]`}
                       customContent={<ArrayOperations path={path}
                                                       name={name}/>}
    />
}

export default ArrayComponent;