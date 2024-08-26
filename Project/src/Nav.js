import { Link } from "react-router-dom";
import './Nav.css';
function Nav(){
  return(
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><Link to="/bill">Bill</Link></li> */}
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
  )
}

export default Nav;