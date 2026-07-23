import "./FoodCard.css";

function FoodCard() {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
        alt="Burger"
      />

      <h2>Chicken Burger</h2>

      <h3>₹150</h3>

      <p>Delicious Chicken Burger</p>

      <button>Add to Cart</button>
      <button>Buy</button>
    </div>
  );
}

export default FoodCard;