import React, { Dispatch } from "react";
import { CarModel, Color } from "./types";

interface FooterProps {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  showAlert: boolean;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  step: number;
  setStep: Dispatch<React.SetStateAction<number>>;
  color: Color;
}

function Footer({
  totalPrice,
  setTotalPrice,
  model,
  setModel,
  showAlert,
  setShowAlert,
  step,
  setStep,
  color,
}: FooterProps) {
  const listClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (model.id !== "") {
      setStep(
        parseInt(button.dataset.step !== undefined ? button.dataset.step : "1")
      );
    } else {
      setShowAlert(true);
    }
  };

  return (
    <footer
      className={`cd-builder-footer ${step === 1 ? "step-1" : ""} ${
        model.id === "" ? "disabled" : ""
      } ${showAlert ? "show-alert" : ""}`}
    >
      <div className="selected-product">
        <img
          src={
            color.imageUrl !== ""
              ? require("./img/" + color.imageUrl)
              : require("./img/product01_col01.jpg")
          }
          alt="Product preview"
        />
        <div className="tot-price">
          <span>Total</span>
          <span className="total">
            $<b>{totalPrice}</b>
          </span>
        </div>
      </div>
      <nav className="cd-builder-secondary-nav">
        <ul>
          <li className="next nav-item">
            <ul>
              <li
                data-step="2"
                onClick={listClickHandler}
                className={`${step === 1 ? "visible" : ""} ${
                  step > 1 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Colors</a>
              </li>
              <li
                data-step="3"
                onClick={listClickHandler}
                className={`${step === 2 ? "visible" : ""} ${
                  step > 2 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Accessories</a>
              </li>
              <li
                data-step="4"
                onClick={listClickHandler}
                className={`${step === 3 ? "visible" : ""} ${
                  step > 3 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Summary</a>
              </li>
              <li className={`buy ${step === 4 ? "visible" : ""}`}>
                <a href="#0">Buy Now</a>
              </li>
            </ul>
          </li>
          <li className="prev nav-item">
            <ul>
              <li
                onClick={listClickHandler}
                data-step="1"
                className={`${step === 2 ? "visible" : ""} ${
                  step > 2 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Models</a>
              </li>
              <li
                onClick={listClickHandler}
                data-step="2"
                className={`${step === 3 ? "visible" : ""} ${
                  step > 3 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Colors</a>
              </li>
              <li
                onClick={listClickHandler}
                data-step="3"
                className={`${step === 4 ? "visible" : ""} ${
                  step > 4 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Accessories</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <span className="alert">Please, select a model first!</span>
    </footer>
  );
}

export default Footer;
