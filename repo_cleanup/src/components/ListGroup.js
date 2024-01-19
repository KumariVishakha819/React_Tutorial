import { useState } from "react";

function ListGroup({ citi, header, fun }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{header}</h1>
      <ul className="list-group">
        {citi.map((x, index) => (
          <li
            key={x}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              fun(x);
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
