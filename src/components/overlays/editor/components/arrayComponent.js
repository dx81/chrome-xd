import ObjectComponent from "./objectComponent"
import GEN from "../gen";

const ArrayComponent = ({treeTLD, name, path, data}) => {
    if (treeTLD) return <ObjectComponent path={path} data={data} name={name}/>;

    return <div>
        &lt;Array&gt; @ {path.join(".")} - {name}
        {data.map((elem, id) => GEN(elem, [...path, name], id))}
    </div>;
}

export default ArrayComponent;