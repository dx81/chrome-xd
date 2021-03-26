import GEN from "../gen";

const InputComponent = ({type, path, name, data}) => {
    return <div>
        &lt;Input&gt; type {type} @ {path.join(".")} - {name}
        {Object.keys(data).map(key => GEN(data[key], [...path, name], key))}
    </div>
}

export default InputComponent;
