import React, { useState } from "react";

export const ListBox = ({ items }) => {
  const [selected, setSelected] = useState(0);

  return (
    <ul className="ListBox">
      {items.map((item, index) => (
        <li
          key={item.id}
          className="ListBoxItem"
          data-selected={index === selected}
          onClick={(e) => setSelected(index)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
