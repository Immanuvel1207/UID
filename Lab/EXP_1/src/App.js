import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Nav from "./Nav.js"
import Home from "./Home";
import About from "./About.js"
import Bill from "./Bill.js";
import Food from "./Food";
import './App.css'; 

function App(){
    return(
      <Router>
        <div>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/bill" element={<Bill/>}/>
          </Routes>
        </div>
      </Router>
    )
}

export default App;