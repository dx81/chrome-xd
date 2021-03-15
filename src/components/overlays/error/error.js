import boxStyle from "../overlay.module.css"

const Error = ({text}) => {
    return <div className={boxStyle.smallOverlayBox}>
        <h2 className={boxStyle.heading}> An error occurred validation JSON </h2>
        <p>
            {text}
        </p>
    </div>
}

export default Error;