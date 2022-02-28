import React from 'react';
import {Card, Col} from 'react-bootstrap'
import './Robotcard.scss'

const Robotcard = ( { name, username, email } ) => {
    return (
        <Col
            className="my-3"
        >
            <Card
                bg="success" 
                text={"success" === 'light' ? 'dark' : 'white'}
                className="text-center"
            >
                <Card.Img variant="top" className="hover-zoom" src={`https://robohash.org/${username}?200x200`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Robotcard;