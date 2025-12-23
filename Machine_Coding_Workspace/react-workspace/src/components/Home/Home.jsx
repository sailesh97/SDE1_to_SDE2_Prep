import { NavLink } from "react-router-dom"
function Home() {
    return (
        <div>
            Home
             <NavLink to="/nested-checkbox" end>
                Nested Checkbox
            </NavLink>
            <NavLink to="/star-rating" end>
                Star Rating
            </NavLink>
        </div>
    )
}

export default Home
