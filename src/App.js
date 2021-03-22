import React from "react"
import Canvas from "./components/display/canvas";
import Init from "./components/pseduo/init";
import Settings from "./components/overlays/settings/settings";
import backend from "./code/backend"

const App = () => {
    let [loaded, setLoaded] = React.useState(false);

    if (!loaded) {
        backend.init(setLoaded);
        return null;
    }

    return <React.Fragment>
        <Canvas/>
        <Settings/>
        <Init/>
    </React.Fragment>;
}

export default App;