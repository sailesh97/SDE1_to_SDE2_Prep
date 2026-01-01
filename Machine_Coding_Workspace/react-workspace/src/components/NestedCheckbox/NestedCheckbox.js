import { useState } from "react";
import checkBoxesData from "./chekboxdata";

/* Utility: collect all descendant ids */
const getAllChildIds = (node) => {
  let ids = [];
  if (node.children) {
    for (const child of node.children) {
      ids.push(child.id);
      ids = ids.concat(getAllChildIds(child));
    }
  }
  return ids;
};

/* Utility: check if all children are selected */
const areAllChildrenChecked = (node, selectedIds) => {
  if (!node.children) return false;
  return node.children.every(
    (child) =>
      selectedIds.has(child.id) &&
      areAllChildrenChecked(child, selectedIds) !== false
  );
};

const CheckboxTree = ({ data }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const handleToggle = (node, isChecked) => {
    const newSelected = new Set(selectedIds);

    if (isChecked) {
      // Check node + all children
      newSelected.add(node.id);
      getAllChildIds(node).forEach((id) => newSelected.add(id));
    } else {
      // Uncheck node + all children
      newSelected.delete(node.id);
      getAllChildIds(node).forEach((id) => newSelected.delete(id));
    }

    setSelectedIds(newSelected);
  };

  const renderNode = (node) => {
    const isChecked =
      selectedIds.has(node.id) ||
      areAllChildrenChecked(node, selectedIds);

    return (
      <div key={node.id} style={{ marginLeft: 20 }}>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleToggle(node, e.target.checked)}
          />
          {node.name}
        </label>

        {node.children &&
          node.children.map((child) => renderNode(child))}
      </div>
    );
  };

  return <div>{data.map(renderNode)}</div>;
};

export default function App() {
  return <CheckboxTree data={checkBoxesData} />;
}
