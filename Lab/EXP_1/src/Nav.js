import { Link } from "react-router-dom";
function Nav(){
  return(
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/bill">Bill Calculator</Link></li>
          <li><Link to="/food">Food</Link></li>
        </ul>
      </nav>
  )
}

export default Nav;