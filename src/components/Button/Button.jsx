import PropTypes from 'prop-types';

import {Button} from "./Button.styled"


export default function ButtonLoad(props) { 
    return (
        <Button type='button' onClick={props.onClick}>Load more</Button>
    )
}

Button.propTypes = {
   onClick: PropTypes.func
}