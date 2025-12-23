import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home/Home';
import NestedCheckBox from './components/NestedCheckbox/NestedCheckbox';
import StarRating from './components/StarRating/StarRating';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nested-checkbox" element={<NestedCheckBox />} />
      <Route path="/star-rating" element={<StarRating />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
