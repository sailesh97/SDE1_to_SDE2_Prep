import checkboxData from "./chekboxdata";
import "./NestedCheckBox.css";
import { useState } from "react";

const Checkbox = ({ data, checkedState, setCheckedState }) => {
  /*  const handleParentNodes = (node, state) => {
    if(!node.children){
      return state[node.id] || false;
    }
    state[node.id] = node.children.every(n => {
      return handleParentNodes(n, state);
    });
    console.log('nodeid, state--', node.name, node.id, state[node.id])
    return state;
  } */

  const updateAllChildNodes = (box, isChecked) => {
    let newState = {};

    if (box.children) {
      box.children.forEach((element) => {
        newState = {
          ...newState,
          [box.id]: isChecked,
          ...updateAllChildNodes(element, isChecked),
        };
      });
    } else {
      newState = {
        ...newState,
        [box.id]: isChecked,
      };
    }
    return newState;
  };

  const handleParentNodes = (state) => {
    const dfs = (node) => {
      // leaf node
      if (!node.children) {
        return state[node.id] || false;
      }

      // check all children
      const allChecked = node.children.every((child) => dfs(child));

      state[node.id] = allChecked;
      return allChecked;
    };

    checkboxData.forEach((node) => dfs(node));
  };

  const updateState = (e, box) => {
    const isChecked = e.target.checked;
    const id = e.target.id;
    setCheckedState((prevState) => {
      const newState = { ...prevState, [id]: isChecked };
      const state = updateAllChildNodes(box, isChecked);
      const updatedState = {
        ...newState,
        ...state,
      };
      handleParentNodes(updatedState);
      return updatedState;
    });
  };

  console.log("checkedState", checkedState);
  return (
    <div>
      {data.map((box) => {
        return (
          <div className="container">
            {
              <span>
                <input
                  type="checkbox"
                  checked={checkedState[box.id] || false}
                  id={box.id}
                  onChange={(e) => updateState(e, box)}
                />
                {box.name}
              </span>
            }
            {box.children && (
              <Checkbox
                data={box.children}
                checkedState={checkedState}
                setCheckedState={setCheckedState}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checkedState, setCheckedState] = useState({});

  return (
    <Checkbox
      data={checkboxData}
      checkedState={checkedState}
      setCheckedState={setCheckedState}
    />
  );
};

export default NestedCheckbox;
