import './Menu.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart } from '../store/cartSlice';
import PizzaCard from '../components/PizzaCard';
import axios from 'axios';

function Menu() {
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    axios
      .get('http://localhost:3001/menu')
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const filteredItems = category === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === category);

  return (
    <div>
      <h1>Our Menu</h1>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="pizzas">Pizzas</option>
          <option value="burgers">Burgers</option>
          <option value="drinks">Drinks</option>
          <option value="wings">Wings</option>
        </select>
      </div>
      <div>
        {filteredItems.map((item) => (
          <PizzaCard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            onAdd={() => dispatch(addToCart(item))}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;