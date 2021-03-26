import ObjectComponent from "./components/objectComponent";
import ArrayComponent from "./components/arrayComponent";
import mappings from "./mappings";

mappings.defaults.array = ArrayComponent;
mappings.defaults.object = ObjectComponent;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    if (mappings.defaults.array === undefined || mappings.defaults.object === undefined) alert("Panic");
};