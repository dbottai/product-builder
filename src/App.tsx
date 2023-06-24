import React, { useState } from "react";
import "../node_modules/reset-css/reset.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import BuilderBody from "./BuilderBody";
import { Accessory, CarModel, Color, Step } from "./types";
import { StepsDirection, emptyCarModel, emptyColor } from "./constants";

function App() {
  const [step, setStep] = useState<Step>({
    number: 1,
    direction: StepsDirection.None,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [model, setModel] = useState<CarModel>(emptyCarModel);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [color, setColor] = useState<Color>(emptyColor);
  const [accessories, setAccessories] = useState<{ [key: string]: Accessory }>(
    {}
  );

  return (
    <div className="cd-product-builder">
      <Header
        model={model}
        step={step}
        setStep={setStep}
        setShowAlert={setShowAlert}
      />
      <BuilderBody
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        model={model}
        setModel={setModel}
        setShowAlert={setShowAlert}
        step={step}
        color={color}
        setColor={setColor}
        accessories={accessories}
        setAccessories={setAccessories}
      />
      <Footer
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        model={model}
        setModel={setModel}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        step={step}
        setStep={setStep}
        color={color}
        setColor={setColor}
        accessories={accessories}
        setAccessories={setAccessories}
      />
    </div>
  );
}

export default App;
