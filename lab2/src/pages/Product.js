const productList = [
    { id: 1, name: "Wireless Headphones", price: "$120", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SUFReFd6NEVVOW50TTcxUzVyWlhHZ2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90TzVtaW9peGdOaitwV1Nxb1VublZoTVE" },
    { id: 2, name: "Smart Watch", price: "$80", img: "https://i.ebayimg.com/images/g/YR4AAOSwOkNj-Bel/s-l1200.jpg" },
    { id: 3, name: "Laptop", price: "$600", img: "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg" }
  ];
  
  function Products() {
    return (
      <div className="products">
        <h1>Products</h1>
        <div className="product-grid">
          {productList.map(p => (
            <div className="product-card" key={p.id}>
              <img src={p.img} alt={p.name} width="300px" />
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Products;  