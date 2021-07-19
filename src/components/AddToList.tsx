import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleSubmit = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        notes: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image url"
        value={input.img}
        className="AddToList-input"
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        value={input.note}
        className="AddToList-input"
        name="note"
        onChange={handleChange}
      />

      <button className="AddToList-btn" onClick={handleSubmit}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
