import React from 'react';
import Aux from '../../../../hoc/Auxc/Auxc';

const navigationItem = (props) => {
    return (
        <Aux>
            <a className="dropdown-item" href={props.link}>{props.name}</a>
        </Aux>
    )
}

export default navigationItem;