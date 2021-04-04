import style from "./editorComponents.module.css"
import backend from "../../../../code/backend";

const setWrapper = (keys, name, eventValue) => {
    keys = [...keys];

    keys.shift();
    keys.push(name);

    backend.engine.api.set(keys, eventValue);
}

const InputComponent = ({type, path, name, data}) => {
    return <div className={style.leftPad}>
        <label className={style.labelPadding}>
            {name} :
        </label>
        {(() => {
            switch (type) {
                case "string":
                    return <input className={style.inputBox}
                                  placeholder={type}
                                  defaultValue={data}
                                  onChange={
                                      (e) => {setWrapper(path, name, e.target.value)}
                                  }
                    />
                case "number":
                    return <input className={style.inputBox}
                                  placeholder={type}
                                  type="number"
                                  defaultValue={data}
                                  onChange={
                                      (e) => {setWrapper(path, name, e.target.value)}
                                  }
                    />
                case "boolean":
                    return <input className={style.checkBox}
                                  type="checkbox"
                                  defaultChecked={data}
                                  onChange={
                                      (e) => {setWrapper(path, name, e.target.checked)}
                                  }
                    />
                default:
                    alert("Invalid type: JS broke");
            }
        })()}
    </div>







}

export default InputComponent;
