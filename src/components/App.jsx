import React from "react";
import Ave from "./Ave";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Ave img="data:image/jpeg;base64,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" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;