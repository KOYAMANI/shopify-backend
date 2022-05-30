import React from "react";

function TextInput(props) {
    return (
        <input
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default TextInput;
