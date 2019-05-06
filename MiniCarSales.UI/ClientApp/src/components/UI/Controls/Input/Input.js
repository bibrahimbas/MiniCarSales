import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['form-control', 'Input']
    let validationError = null;

    if(props.invalid && props.touched) {
        inputClasses.push('Invalid');
        validationError = <p className="Error">Please enter a valid {props.elementConfig.label} value !</p>;
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textArea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
    }

    return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <label className="Label">{props.elementConfig.label}</label>
                    </div>
                    <div className="col-8">
                        {inputElement}
                        {validationError}
                    </div>
                </div>
            </div>
    );
}

export default input;