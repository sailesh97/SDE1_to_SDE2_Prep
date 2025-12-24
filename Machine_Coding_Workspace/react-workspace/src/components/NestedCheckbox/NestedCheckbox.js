import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NestedCheckBox.css';
const checkBoxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Lemon",
          },
        ],
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry",
          },
          {
            id: 7,
            name: "Blueberry",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Tropical",
    children: [
      {
        id: 9,
        name: "Mango",
      },
      {
        id: 10,
        name: "Bannana",
      },
    ],
  },
  {
    id: 11,
    name: "Apple",
  },
];

const CheckBoxes = ({ data, checked, setChecked }) => {
  const changeCheckBoxState = (isChecked, node) => {
    // console.log("Sailesh", node.name, isChecked);
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildNodes = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildNodes(child);
        });
      };
      updateChildNodes(node);
      const handleParentNodes = (node) => {
        if (!node.children) {
          console.log("SAILESH", node.name, newState?.[node.id]);
          return newState[node.id] || false;
        }
        newState[node.id] = node.children.every((child) =>
          handleParentNodes(child)
        );
        return newState[node.id];
      };
      checkBoxesData.forEach((node) => {
        handleParentNodes(node);
      });
      return newState;
    });
  };
  console.log(checked);
  return data.map((node) => {
    return (
      <div key={node.id} className="checkBoxInput">
        <input
          type="checkbox"
          id={node.id}
          checked={checked[node.id] || false}
          onChange={(e) => changeCheckBoxState(e.target.checked, node)}
        />
        <span>{node.name}</span>
        {node.children && (
          <CheckBoxes
            data={node.children}
            checked={checked}
            setChecked={setChecked}
          />
        )}
      </div>
    );
  });
};

export default function NestedCheckBox() {
  const [checked, setChecked] = useState({});
  return (
    <div className="App">
      <CheckBoxes
        data={checkBoxesData}
        checked={checked}
        setChecked={setChecked}
      />

      <NavLink to="/" end>
          Home
      </NavLink>
    </div>
  );
}
