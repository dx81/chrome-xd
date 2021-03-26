import GEN from "../gen";

const InputComponent = ({type, path, name, data}) => {
    return <div>
        &lt;Input&gt; {type} @ {path.join(".")}.{name}
    </div>
}

export default InputComponent;
