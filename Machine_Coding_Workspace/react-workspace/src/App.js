import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home/Home';
import NestedCheckBox from './components/NestedCheckbox/NestedCheckbox';
import StarRating from './components/StarRating/StarRating';
function Test(){
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="blue" onSetRating={setMovieRating} maxRating={10}/>
      <p> The Movie was rated {movieRating} stars.</p>
    </>
  )
}
function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nested-checkbox" element={<NestedCheckBox />} />
      <Route path="/star-rating" element={
        <>
          <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={3} />
          <StarRating size={24} color={'red'} className="test" />
          <Test/>
          {/* <StarRating maxRating={5} />
          <StarRating maxRating={10} /> */}
        </>
      } 
      />
    </Routes>
  </BrowserRouter>);
}

export default App;
