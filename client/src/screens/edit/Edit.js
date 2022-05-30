import React from "react";
import CustomForm from "../../components/forms/customForm";
import {useLocation} from "react-router-dom";

const EditScreen = () => {

    const location = useLocation();
    const { item } = location.state;
    console.log(item)

    return (
        <body>
        <header>
            <h1>Edit item </h1>
            <ul>
                <li><p>ID: {item._id}</p></li>
                <li><p>name: {item.name}</p></li>
                <li><p>status: {item.status}</p></li>
            </ul>
            <CustomForm item={item}/>
        </header>
        </body>
    )
}

export default EditScreen