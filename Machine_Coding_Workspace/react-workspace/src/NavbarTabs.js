import { Tabs, Tab } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const tabConfig = [
  { label: "Home", path: "/home" },
  { label: "Nested Checkbox", path: "/nested-checkbox" },
  { label: "Star Rating", path: "/star-rating" },
];

export default function NavbarTabs() {
  const location = useLocation();

  return (
    <Tabs
      value={location.pathname}
      indicatorColor="primary"
      textColor="primary"
    >
      {tabConfig.map((tab) => (
        <Tab
          key={tab.path}
          label={tab.label}
          value={tab.path}
          component={NavLink}
          to={tab.path}
        />
      ))}
    </Tabs>
  );
}
