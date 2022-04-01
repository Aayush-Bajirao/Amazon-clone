import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Startpage from './Startpage';
import Checkout from './Checkout';
import Loginpage from './Loginpage';

function App() {
  return (
    <Router>
    <div className="App">      
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Loginpage />} />


      </Routes>
    </div>
    </Router>
  );
}

export default App;
