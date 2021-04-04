import BlankComponent from "./components/blankComponent";
import InputComponent from "./components/inputComponent";
import ArrayComponent from "./components/arrayComponent";
import ObjectComponent from "./components/objectComponent";

const StrC = ({name, path, data, type}) => {
    return <div>
        {path.join(".")}.{name} {type}
    </div>
}

const mappings = {
    defaults : {
        array : ArrayComponent,
        object : ObjectComponent,
        string : InputComponent,
        null : BlankComponent,
        boolean : InputComponent,
        number : InputComponent,
        bigint : BlankComponent,
        symbol : BlankComponent,
        function : BlankComponent
    },
    overrides : {
        //"tld.x.geometry" : StrC,
        //"tld.x.transform" : StrC
    }
}

export default mappings;