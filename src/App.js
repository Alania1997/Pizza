import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Menu from './pages/Menu';
import OrderConfirmation from './pages/OrderConfirmation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/menu">Меню</Link></li>
            <li><Link to="/cart">Корзина</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

//Routes как я понимаю это добавление новых страниц 