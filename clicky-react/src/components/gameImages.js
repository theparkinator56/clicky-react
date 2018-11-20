import React from "react";
import "./game.css"

const gameImages = props => (
    <div
        role="img"
        aria-label="click item"
        className={`gameImage`} 
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.handleClick(props.id)}
    /> 
);

export default gameImages;