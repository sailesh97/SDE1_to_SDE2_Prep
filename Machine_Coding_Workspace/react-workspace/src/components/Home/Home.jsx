import { NavLink } from "react-router-dom"
function Home() {
    return (
        <div>
           <NavLink to="/nested-checkbox">Go to Nested Checkbox</NavLink>
           <br/>
           <NavLink to="/star-rating">Go to Star Rating</NavLink>
           <br/>
           <NavLink to="/table">Go to Table</NavLink>
        </div>
    )
}

export default Home;
