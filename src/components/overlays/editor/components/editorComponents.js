import style from "./editorComponents.module.css"
import Collapsible from 'react-collapsible';

const TriggerOpen = ({name}) => {

}

const TriggerClosed = ({name}) => {

}

export const TreeNode = ({name, children}) => {
    return <Collapsible className={style.collapsibleStyle}
                        trigger={<TriggerClosed name={name}/>}
                        triggerWhenOpen={<TriggerOpen name={name}/>}>
        {children}
    </Collapsible>
}