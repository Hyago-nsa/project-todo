import React from "react";

const Card = (props: { id: string; text: string }) => {
  return (
    <div>
      <li>id: {props.id} </li>
      <li>text: {props.text}</li>
    </div>
  );
};

export default Card;
