// Pages and components
import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Signup from "./components/signup/SignupForm";
import NavBar from "./components/navbar/navbar";
import Login from "./components/login/LoginForm";
import Footer from "./components/footer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = window.localStorage.getItem("user_id");
  
  return (
      <div className="App">
        <header className="App-header">
          <NavBar navigate={ navigate} />
        </header>
        <div className="pages">
          <Routes>
            <Route path="/" element={user?<Home navigate={ navigate}/> : <Navigate to="/login"></Navigate> }/>
            <Route path="/signup" element={!user ? <Signup navigate={ navigate } /> : <Navigate to="/"></Navigate>} />
            <Route path="/login" element={!user ? <Login navigate={ navigate } /> : <Navigate to="/"></Navigate>} />
          </Routes>
          {(location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') && <Footer />}
        </div>
      </div>
   
  );
}


export default App;
