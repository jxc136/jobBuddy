// Pages and components
import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from "./components/signup/SignupForm";
import NavBar from "./components/navbar/navbar";
import Login from "./components/login/LoginForm";

function App() {
  const navigate = useNavigate();
  const user = window.localStorage.getItem("user_id");
  
  return (
      <div className="App">
        <header className="App-header">
          <NavBar navigate={ navigate} />
        </header>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home navigate={ navigate}/>}/>
            <Route path="/signup" element={!user ? <Signup navigate={ navigate } /> : <Navigate to="/"></Navigate>} />
            <Route path="/login" element={!user ? <Login navigate={ navigate } /> : <Navigate to="/"></Navigate>} />
          </Routes>
        </div>
      </div>
   
  );
}


export default App;
