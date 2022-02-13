import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CartPage from './components/CartPage/CartPage';
import Home from './components/Home/Home';

function App({ products, cart }) {
  return (
    <BrowserRouter>
    <div>      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="cart" element={<CartPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
