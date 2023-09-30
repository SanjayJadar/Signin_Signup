import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div className="App"> 
        <Router>
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/" element={<Login/>}/>
            </Routes>
        </Router> 
    </div>
  );
}

export default App;
