export default function ProductInfo() {
  return (
    <div className="product-info">
      <p className="category">PERFUME</p>
      <h1 className="title">
        Gabrielle <br /> Essence Eau <br />
        De Parfum
      </h1>
      <p className="description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="pricing">
        <h1 className="sale-price">$149.99</h1>
        <p className="price">$169.99 </p>
      </div>
      <button className="btn">
        <img src="../public/assets/icon-cart.svg" /> Add to Cart
      </button>
    </div>
  );
}
