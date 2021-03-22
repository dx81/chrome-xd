import {SmallOverlayBox, Heading} from "../_components/components";

const Error = ({text}) => {
    return <SmallOverlayBox>
        <Heading> An error occurred validation JSON </Heading>
        <p>
            {text}
        </p>
    </SmallOverlayBox>
}

export default Error;