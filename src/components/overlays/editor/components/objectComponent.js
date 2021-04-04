import ObjectBase from "./objectBasedComponent";

const ObjectComponent = ({name, path, data}) => {
    return <ObjectBase name={name} data={data} path={path} displayName={name}/>
}

export default ObjectComponent;