import React from "react";
import CustomForm from "../../components/forms/customForm";
import CustomLinks from "../../components/links/customLinks";

const HomeScreen = () => {
    return (
        <body>
        <header>
            <h1>Create an item</h1>
            <CustomForm/>
        </header>
        <main>
            <CustomLinks/>
        </main>
        </body>
    )
}

export default HomeScreen
