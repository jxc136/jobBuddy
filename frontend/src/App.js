import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup'

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
