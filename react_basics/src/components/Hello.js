import React from "react";

export const Hello = (props) =>{
    return (
    <div>
        <h1>Hello {props.name}, Good {props.message}!!</h1>
        {props.children}
    </div>
)
};