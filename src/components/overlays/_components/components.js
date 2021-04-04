import style from "./overlayComponents.module.css"

export const Button = ({children, className, ...props}) => {
    return <button className={[style.button, className].join(" ")} {...props}>
        {children}
    </button>
}

export const SmallOverlayBox = ({children, className, ...props}) => {
    return <div className={[style.smallOverlayBox , className].join(" ")} {...props}>
        {children}
    </div>
}

export const Heading = ({children, className, ...props}) => {
    return <h2 className={[style.heading, className].join(" ")} {...props}>
        {children}
    </h2>
}

export const LargeOverlayBox = ({children, className, ...props}) => {
    return <div className={[style.largeOverlayBox, className].join(" ")} {...props}>
        {children}
    </div>
}

export const Subheading = ({children, className, ...props}) => {
    return <h4 className={[style.heading, className].join(" ")} {...props}>
        {children}
    </h4>
}

export const Spacer = ({className, ...props}) => {
    return <div className={[style.spacer, className].join(" ")} {...props}> </div>
}

export const CloseDiv = ({children, className, ...props}) => {
    return <div className={[style.closeDiv, className].join(" ")} {...props}>
        {children}
    </div>
}