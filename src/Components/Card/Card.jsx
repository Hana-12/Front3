import React from "react";

const Card = ({nombre, animal }) => {
return (
    <div>
        <h2>Hola {nombre} </h2>
        <h2>el animal que te identifica es: {animal} </h2>
    </div>
    );
};

export default Card;
