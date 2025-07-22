import './Home.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import PizzaCard from '../components/PizzaCard';

function Home() {
  const dispatch = useDispatch();
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      price: 10.99,
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      image: 'https://via.placeholder.com/150?text=Margherita',
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: 12.99,
      description: 'Spicy pepperoni with extra cheese.',
      image: 'https://via.placeholder.com/150?text=Pepperoni',
    },
    {
      id: 3,
      name: 'Vegetariana',
      price: 11.99,
      description: 'Fresh veggies and light cheese.',
      image: 'https://via.placeholder.com/150?text=Vegetariana',
    },
  ];

  return (
    <div>
      <h1>Welcome to Pizza Delivery!</h1>
      <div>
        <h2>Our Menu</h2>
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            description={pizza.description}
            image={pizza.image}
            onAdd={() => dispatch(addToCart(pizza))}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;