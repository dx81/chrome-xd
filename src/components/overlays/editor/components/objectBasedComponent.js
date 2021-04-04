import style from "./editorComponents.module.css"
import Collapsible from 'react-collapsible';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/all";
import GEN from "../gen";
import {useState} from "react";

const TriggerOpen = ({name}) => {
    return <div>
        <MdKeyboardArrowDown style={{marginRight: "3px"}}/>
        <p className={style.collapsibleStyleP}>{name}</p>
    </div>
}

const TriggerClosed = ({name}) => {
    return <div>
        <MdKeyboardArrowRight style={{marginRight: "3px"}}/>
        <p className={style.collapsibleStyleP}>{name}</p>
    </div>
}

const ObjectBase = ({name, path, data, displayName, customContent, pushFn}) => {
    const runContent = () => {
        setContent(Object.keys(data).map(key => GEN(data[key], [...path, name], key)));
    }

    const [content, setContent] = useState([]);
    if (content.length === 0) {
        if (pushFn) pushFn(runContent);
    }

    return <Collapsible classParentString={style.collapsibleStyle}
                        trigger={<TriggerClosed name={displayName}/>}
                        triggerWhenOpen={<TriggerOpen name={displayName}/>}
                        onTriggerOpening={runContent}
                        contentInnerClassName={style.collapsibleInner}
    >
        <div className={style.sidelineHue}> </div>
        <div className={style.blockDiv}>
            {content}
            {customContent}
        </div>
    </Collapsible>
}

export default ObjectBase;