import React from "react"
import Canvas from "./components/display/canvas";
import Init from "./components/pseduo/init";
import Settings from "./components/overlays/settings/settings";

const App = () => {
    return <React.Fragment>
        <Canvas/>
        <Settings/>
        <Init/>
    </React.Fragment>;
}

export default App;