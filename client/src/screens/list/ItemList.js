import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteItemAction, sortItemAction} from "../../actions/itemActions";
import {Button, Card} from "react-bootstrap";
import CustomLinks from "../../components/links/customLinks";
import {useNavigate} from "react-router-dom";

function ItemList (props){
    const dispatch = useDispatch();

    const itemList = useSelector(state => state.itemList);
    const  {items} = itemList;
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(sortItemAction(props.status));
    }, [dispatch, props.status])

    const deleteHandler = (id) => {
        if (window.confirm("Delete this item ?")) {
            dispatch(deleteItemAction(id));
        }
    };

    const editHandler = (item) => {
        navigate('/edit',{state: {item: item}});
    };

    console.log(items)

    return(
        <body>
        <header>
            <h2><a href="/">Home</a></h2>
            <CustomLinks/>
            <h1>{props.status}</h1>
        </header>
        <div>
            {items?.map(item =>(
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Body>{item.status}</Card.Body>
                            <Button
                                variant="primary"
                                onClick={()=>deleteHandler(item._id)}
                            >Delete item</Button>
                            <Button
                                variant="primary"
                                onClick={()=>editHandler(item)}
                            >Edit item</Button>
                        </Card.Body>
                    </Card>
                )
            )}
        </div>
        </body>
    )
}

export default ItemList