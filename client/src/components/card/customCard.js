import React from "react";
import {Button, Card} from "react-bootstrap";

function CustomCard (props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Body>{props.status}</Card.Body>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export  default  CustomCard