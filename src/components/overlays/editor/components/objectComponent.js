import style from "./editorComponents.module.css"
import Collapsible from 'react-collapsible';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/all";
import GEN from "../gen";

/*const TriggerOpen = ({name}) => {
    return <div>
        <MdKeyboardArrowDown style={{marginRight: "3px"}}/>
        {name}
    </div>
}

const TriggerClosed = ({name}) => {
    return <div>
        <MdKeyboardArrowRight style={{marginRight: "3px"}}/>
        {name}
    </div>
}

const ObjectComponent = ({name, path, data}) => {
    return <Collapsible classParentString={style.collapsibleStyle}
                        trigger={<TriggerClosed name={name}/>}
                        triggerWhenOpen={<TriggerOpen name={name}/>}
                        lazyRender={true}
    >

    </Collapsible>
}*/

const ObjectComponent = ({name, path, data}) => {
    return <div>
        &lt;Object&gt; @ {path.join(".")} - {name}
        {Object.keys(data).map(key => GEN(data[key], [...path, name], key))}
    </div>
}

export default ObjectComponent;