import React from "react"
import style from "./canvas.module.css"
import backend from "../../code/backend";

window.onresize = () => {
    document.getElementById("main").width = window.innerWidth;
    document.getElementById("main").height = window.innerHeight;
}

const Canvas = () => {
    return <div>
        <canvas id="main" width={window.innerWidth} height={window.innerHeight} className={style.main} onLoad={() => backend.onload()}/>
        <div id="debugInfo" className={style.debugInfo}> </div>
    </div>
}

export default Canvas;