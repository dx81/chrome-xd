import style from "./editorComponents.module.css"

//TODO: handle changes

const InputComponent = ({type, path, name, data}) => {
    return <div className={style.leftPad}>
        <label className={style.labelPadding}>
            {name} :
        </label>
        {(() => {
            switch (type) {
                case "string":
                    return <input className={style.inputBox} placeholder={type} defaultValue={data}/>
                case "number":
                    return <input className={style.inputBox} placeholder={type} type="number" defaultValue={data}/>
                case "boolean":
                    return <input className={style.checkBox} type="checkbox" defaultChecked={data}/>
                default:
                    alert("Invalid type: JS broke");
            }
        })()}
    </div>







}

export default InputComponent;
