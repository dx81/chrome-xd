import React from "react"
import style from "./canvas.module.css"
import backend from "../../code/backend";

class Canvas extends React.Component {
    componentDidMount () {
        backend.onload();
    }

    render () {
        return <div>
            <canvas id="main" width={window.innerWidth} height={window.innerHeight} className={style.main}/>
            <div id="debugInfo" className={style.debugInfo}> </div>
        </div>
    }
}

export default Canvas;