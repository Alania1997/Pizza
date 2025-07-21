import './Home.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Home() {
  const dispatch = useDispatch();
  const pizzas = [
    { id: 1, name: 'Margherita', price: 10.99 },
    { id: 2, name: 'Pepperoni', price: 12.99 },
    { id: 3, name: 'Vegetariana', price: 11.99 },
  ];

  return (
    <div>
      <h1>Welcome to Pizza Delivery!</h1>
      <div>
        <h2>Our Menu</h2>
        <ul>
          {pizzas.map((pizza) => (
            <li key={pizza.id}>
              {pizza.name} - ${pizza.price}
              <button onClick={() => dispatch(addToCart(pizza))}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;