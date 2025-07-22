import './PizzaCard.css';

function PizzaCard({ name, price, description, image, onAdd }) {
  return (
    <div className="pizza-card">
      <img src={image} alt={name} className="pizza-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

export default PizzaCard;