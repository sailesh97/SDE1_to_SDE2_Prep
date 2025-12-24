import { useState } from "react";
import StarRating from "./StarRating";

function StarRatingWrapper() {
    const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="blue" onSetRating={setMovieRating} maxRating={10}/>
      <p> The Movie was rated {movieRating} stars.</p>
    </>
  )
}

export default StarRatingWrapper;
