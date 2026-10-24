// Q10: Array of objects + unique key (product id)
import ProductItem from "./ProductItem";

const products = [
  { id: 101, name: "Laptop", price: 55000 },
  { id: 102, name: "Smartphone", price: 20000 },
  { id: 103, name: "Headphones", price: 1500 },
  { id: 104, name: "Keyboard", price: 800 },
];

function ProductList() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
