
import React from "react";

const Clothes = (props) => {
    console.log(props);
    return (
        <>
            <h1>{props.children}</h1>
            <ul>
                <li><b>Name:</b>{props.name}</li>
                <li><b>Type:</b>{props.type}</li>
                <li><b>Color:</b>{props.color}</li>
                <li><b>Size:</b>{props.size}</li>
            </ul>
        </>
    );
}

const AppClothes = (props) => {
    const clothPool = {
        name: "A12",
        type: "B1",
        color: "verde",
        size: "XX"
    }
    return (
        <>

            <Clothes name={clothPool.name}
                type={clothPool.type}
                color={clothPool.color}
                size={clothPool.size} />
            <Clothes name={clothPool.name}
                type={clothPool.type}
                color={clothPool.color}
                size={clothPool.size} />
        </>
    );
}

export default AppClothes;