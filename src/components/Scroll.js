import React from "react";
import './Scroll.scss';

const Scroll = (props) => {
    return (
        <div className="scroll-y">
            {props.children}
        </div>
    )
}

export default Scroll;