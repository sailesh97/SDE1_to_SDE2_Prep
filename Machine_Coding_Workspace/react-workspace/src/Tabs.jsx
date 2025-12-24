import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { NavLink } from "react-router";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" />
          <Tab 
            component={NavLink}
            to="/nested-checkbox"
            label="Nested Checkbox" 
            key={"/nested-checkbox"}
            />
          <Tab label="Star Rating" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <NavLink to="/" end>
          Home
        </NavLink>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <NavLink to="/nested-checkbox" end>
          Nested Checkbox
        </NavLink>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <NavLink to="/star-rating" end>
          Star Rating
        </NavLink>
      </CustomTabPanel>
    </Box>
  );
}
