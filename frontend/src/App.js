import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/SignupForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signup />}>
      
              </Route>
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
