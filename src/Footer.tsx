import React, { Dispatch, useEffect } from "react";
import { Accessory, CarModel, Color, Step } from "./types";
import { StepsDirection } from "./constants";

interface FooterProps {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  showAlert: boolean;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  step: Step;
  setStep: Dispatch<React.SetStateAction<Step>>;
  color: Color;
  setColor: Dispatch<React.SetStateAction<Color>>;
  accessories: { [key: string]: Accessory };
  setAccessories: Dispatch<React.SetStateAction<{ [key: string]: Accessory }>>;
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
  setColor,
  accessories,
  setAccessories,
}: FooterProps) {
  useEffect(() => {
    let accessoriesPrice = 0;

    Object.keys(accessories).map(function (key) {
      return (accessoriesPrice += accessories[key].price);
    });
    setTotalPrice(model.price + color.price + accessoriesPrice);
  }, [accessories, color.price, model.price, setTotalPrice]);

  const listClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (model.id !== "") {
      const nextStepNumber = parseInt(
        button.dataset.step !== undefined ? button.dataset.step : "1"
      );
      const direction =
        nextStepNumber > step.number
          ? StepsDirection.Right
          : StepsDirection.Left;
      const nextStepItem: Step = {
        number: nextStepNumber,
        direction: direction,
      };
      setStep(nextStepItem);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <footer
      className={`cd-builder-footer ${step.number === 1 ? "step-1" : ""} ${
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
                className={`${step.number === 1 ? "visible" : ""} ${
                  step.number > 1 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Colors</a>
              </li>
              <li
                data-step="3"
                onClick={listClickHandler}
                className={`${step.number === 2 ? "visible" : ""} ${
                  step.number > 2 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Accessories</a>
              </li>
              <li
                data-step="4"
                onClick={listClickHandler}
                className={`${step.number === 3 ? "visible" : ""} ${
                  step.number > 3 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Summary</a>
              </li>
              <li className={`buy ${step.number === 4 ? "visible" : ""}`}>
                <a href="#0">Buy Now</a>
              </li>
            </ul>
          </li>
          <li className="prev nav-item">
            <ul>
              <li
                onClick={listClickHandler}
                data-step="1"
                className={`${step.number === 2 ? "visible" : ""} ${
                  step.number > 2 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Models</a>
              </li>
              <li
                onClick={listClickHandler}
                data-step="2"
                className={`${step.number === 3 ? "visible" : ""} ${
                  step.number > 3 ? "visible visited" : ""
                } `}
              >
                <a href="#0">Colors</a>
              </li>
              <li
                onClick={listClickHandler}
                data-step="3"
                className={`${step.number === 4 ? "visible" : ""} ${
                  step.number > 4 ? "visible visited" : ""
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
