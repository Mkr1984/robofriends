import React from "react";
import Robotcard from "./Robotcard";
import {Row} from 'react-bootstrap'

const RobotcardList = ({robots}) => {
    return (
        <Row
            className="justify-content-center"
        >
            {
                robots.map((user,i) => {
                return (<Robotcard key={i} username={robots[i].username} name={robots[i].name} email={robots[i].email}/>);
                })
            }
        </Row>
    );
}

export default RobotcardList;