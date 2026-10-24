// Q5: Reusable ProductCard
function ProductCard({ productName, price, category }) {
  return (
    <div className="card">
      <h3>{productName}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;
