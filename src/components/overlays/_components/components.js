import style from "./overlayComponents.module.css"

export const Button = ({children, ...props}) => {
    return <button className={style.button} {...props}>
        {children}
    </button>
}

export const SmallOverlayBox = ({children, ...props}) => {
    return <div className={style.smallOverlayBox} {...props}>
        {children}
    </div>
}

export const Heading = ({children, ...props}) => {
    return <h2 className={style.heading} {...props}>
        {children}
    </h2>
}

export const LargeOverlayBox = ({children, ...props}) => {
    return <div className={style.largeOverlayBox} {...props}>
        {children}
    </div>
}

export const Subheading = ({children, ...props}) => {
    return <h4 className={style.heading} {...props}>
        {children}
    </h4>
}

export const Spacer = ({...props}) => {
    return <div className={style.spacer} {...props}> </div>
}

export const CloseDiv = ({children, ...props}) => {
    return <div className={style.closeDiv} {...props}>
        {children}
    </div>
}