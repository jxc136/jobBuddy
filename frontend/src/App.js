// Pages and components
import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/SignupForm";
import NavBar from "./components/navbar/navbar";
import Login from "./components/login/LoginForm";
import Modal from "./components/createApplication/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
