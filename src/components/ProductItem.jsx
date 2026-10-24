// Q10: Reusable item component
function ProductItem({ id, name, price }) {
  return (
    <div className="card">
      <p>ID: {id}</p>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
}

export default ProductItem;
