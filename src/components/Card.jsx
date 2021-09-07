import React from "react";
import Ave from "./Ave";
import Email from "./Email";
import Phone from "./Phone";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Ave img={props.img} />
      </div>
      <div className="bottom">
        <Phone tel={props.phone} />
        <Email email={props.email} />
      </div>
    </div>
  );
}

export default Card;
