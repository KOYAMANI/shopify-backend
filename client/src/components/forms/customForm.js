import React, { useState } from "react";
import { useDispatch} from "react-redux";
import Button from "../buttons/button";
import TextInput from "../input/textInput";
import {createItemAction, editItemAction} from "../../actions/itemActions";
import {useLocation} from "react-router-dom";



function CustomForm(props){

    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [status, setStatus] = useState( "InStock");

    const dispatch = useDispatch();
    const location = useLocation();

    const submitHandler = async (e) => {
        e.preventDefault();
        if(location.pathname === '/') dispatch(createItemAction(name, tag, status));
        if(location.pathname === '/edit') dispatch(editItemAction(name, tag, status, props.item._id))
        setName('');
        setTag('');
    }

    return (
        <div role="main">
            <form onSubmit={submitHandler} className="grid gap-3">
                <TextInput
                    placeholder="name"
                    type="name"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextInput
                    placeholder = "Tag (optional)"
                    type="tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
                <div>
                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="InStock">In-stock</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
                <Button text="Submit" type="submit"/>
            </form>
        </div>
    );
}

export default CustomForm;