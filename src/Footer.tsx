import React, { Dispatch } from "react";
import { CarModel, Color } from "./types";

function Footer(props: {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  showAlert: boolean;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  step: number;
  setStep: Dispatch<React.SetStateAction<number>>;
  color: Color;
}) {
  const listClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (props.model.id !== "") {
      props.setStep(
        parseInt(button.dataset.step !== undefined ? button.dataset.step : "1")
      );
    } else {
      props.setShowAlert(true);
    }
  };

  return (
    <footer
      className={`cd-builder-footer ${props.step === 1 ? "step-1" : ""} ${
        props.model.id === "" ? "disabled" : ""
      } ${props.showAlert ? "show-alert" : ""}`}
    >
      <div className="selected-product">
        <img
          src={
            props.color.imageUrl !== ""
              ? require("./img/" + props.color.imageUrl)
              : require("./img/product01_col01.jpg")
          }
          alt="Product preview"
        />
        <div className="tot-price">
          <span>Total</span>
          <span className="total">
            $<b>{props.totalPrice}</b>
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
                className={`${props.step === 1 ? "visible" : ""} ${
                  props.step > 1 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Colors</a>
              </li>
              <li
                data-step="3"
                onClick={listClickHandler}
                className={`${props.step === 2 ? "visible" : ""} ${
                  props.step > 2 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Accessories</a>
              </li>
              <li
                data-step="4"
                onClick={listClickHandler}
                className={`${props.step === 3 ? "visible" : ""} ${
                  props.step > 3 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Summary</a>
              </li>
              <li className={`buy ${props.step === 4 ? "visible" : ""}`}>
                <a href="#0">Buy Now</a>
              </li>
            </ul>
          </li>
          <li className="prev nav-item">
            <ul>
              <li
                onClick={listClickHandler}
                data-step="1"
                className={`${props.step === 2 ? "visible" : ""} ${
                  props.step > 2 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Models</a>
              </li>
              <li
                onClick={listClickHandler}
                data-step="2"
                className={`${props.step === 3 ? "visible" : ""} ${
                  props.step > 3 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Colors</a>
              </li>
              <li
                onClick={listClickHandler}
                data-step="3"
                className={`${props.step === 4 ? "visible" : ""} ${
                  props.step > 4 ? "visible visited" : ""
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
