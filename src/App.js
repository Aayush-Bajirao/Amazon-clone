import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
    <div className="App">      
      <Routes>
        <Route path="/" element={
          <Header />
        } />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login page</h1>} />


      </Routes>
    </div>
    </Router>
  );
}

export default App;
