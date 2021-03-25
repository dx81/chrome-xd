import style from "./editorComponents.module.css"
import Collapsible from 'react-collapsible';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/all";

const TriggerOpen = ({name}) => {
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

export const TreeNode = ({name, children}) => {
    return <Collapsible classParentString={style.collapsibleStyle}
                        trigger={<TriggerClosed name={name}/>}
                        triggerWhenOpen={<TriggerOpen name={name}/>}
    >
        {children}
    </Collapsible>
}