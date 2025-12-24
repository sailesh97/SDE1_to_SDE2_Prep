import { BrowserRouter, Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import NestedCheckBox from "./components/NestedCheckbox/NestedCheckbox";
import StarRating from "./components/StarRating/StarRating";
import StarRatingWrapper from "./components/StarRating/StarRatingWrapper";
import { NavLink } from "react-router";
import AppLayout from './AppLayout';
import NavbarTabs from "./NavbarTabs";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/nested-checkbox" element={<NestedCheckBox />} />
          <Route
            path="/star-rating"
            element={
              <>
                <StarRating
                  messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
                  defaultRating={3}
                />
                <StarRating size={24} color={"red"} className="test" />
                <StarRatingWrapper />
                <NavLink to="/" end>
                  Home
                </NavLink>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
