import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import { Context } from "./context/Context";
import { useContext } from "react";
import Single from "./pages/Single";

function App() {
  const {user} = useContext(Context);
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/write" element={user?<Write/>:<Register/>}></Route>
        <Route exact path="/login" element={user?<Home/>:<Login/>}></Route>
        <Route exact path="/register" element={user?<Home/>:<Register/>}></Route>
        <Route exact path="/settings" element={user?<Settings/>:<Login/>}></Route>
        <Route exact path="/post/:postId" element={<Single/>}></Route>
      </Routes>
      </Router>  
    </>
  );
}

export default App;
