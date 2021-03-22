import {Button} from "../../_components/components";

const ButtonGroup = ({text, description, oc}) => {
    return <div style={{paddingBottom: "3px"}}>
        <Button style={{width: "100px", marginRight: "10px"}} onClick={oc}> {text} </Button>
        {description}
    </div>
}

export default ButtonGroup;