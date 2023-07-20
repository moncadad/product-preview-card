import React from "react";
import "./App.css";

import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  return (
    <>
      <div className="product-container">
        <ProductImage />
        <ProductInfo />
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Denise Moncada</a>.
      </div>
    </>
  );
}
