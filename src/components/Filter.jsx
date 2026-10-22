function CheapProducts() {
  
  const products = [
            {id: 1, name: "Laptop", category: "Komputery", price: 3500},
            {id: 2, name: "Mysz", category: "Akcesoria", price: 80},
            {id: 3, name: "Klawiatura", category: "Akcesoria", price: 200},
            {id: 4, name: "Monitor", category: "Monitory", price: 900}
        ];

const cheapProducts = products.filter((product) => product.price < 1000);



  return (
    <div>
      <h2>Produkty poniżej 1000 zł</h2>
      {cheapProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name} — {product.price} zł</p>
        </div>
      ))}
    </div>
  );
}

export default CheapProducts;