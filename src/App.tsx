import React, { useState } from "react";
import "../node_modules/reset-css/reset.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import BuilderBody from "./BuilderBody";
import ProductSteps from "./ProductSteps";

function App() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [clickedButton, setClickedButton] = useState<string | undefined>(
    undefined
  );

  console.log(ProductSteps["product-1"]);

  return (
    <div className="cd-product-builder">
      <Header />
      <BuilderBody
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <Footer
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
    </div>
  );
}

export default App;
