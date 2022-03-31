import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">      
      <h1>Amazon Clone</h1> 
      <Routes>
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login page</h1>} />
        <Route path="/" element={<h1>Home page</h1>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
