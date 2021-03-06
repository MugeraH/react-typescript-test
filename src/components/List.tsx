import React from "react";
import { IState as IProps } from "../App";



//? Passing props with react and typescript
// function List({people}: IProps) {
//   return <div>list</div> ;
// }
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={person.name}>
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old </p>
          <p className="List-note">{person.notes}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
