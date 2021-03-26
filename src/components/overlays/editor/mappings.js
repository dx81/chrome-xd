import BlankComponent from "./components/blankComponent";
import InputComponent from "./components/inputComponent";
import ArrayComponent from "./components/arrayComponent";
import ObjectComponent from "./components/objectComponent";

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
        "test.override.blank" : BlankComponent
    }
}

export default mappings;