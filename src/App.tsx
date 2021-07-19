import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";

import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}
function App() {
  // const [number, setNumber] = useState<number | string | boolean>(5);

  // const changeNumber = () => {
  //   setNumber(true);
  // };
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w700.jpg",
      age: 34,
      notes: "Allergic to carrots",
    },
  ]);

  // people.map((person) => {
  //   console.log(person.age);
  // });

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
