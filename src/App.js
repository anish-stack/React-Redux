import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </BrowserRouter>
  
</div>
  );
}

export default App;
