import React, { Dispatch, useEffect } from "react";

import {
  I3_MODEL,
  I8_MODEL,
  i3Colors,
  i3DefaultColor,
  i8Colors,
  i8DefaultColor,
} from "./constants";
import { CarModel, Color } from "./types";

function ColorsStep(props: {
  step: number;
  model: CarModel;
  color: Color;
  setColor: Dispatch<React.SetStateAction<Color>>;
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    if (props.color.id !== "") {
      props.setColor(props.color);
    } else if (props.model.id === I3_MODEL) {
      props.setColor(i3DefaultColor);
    } else if (props.model.id === I8_MODEL) {
      props.setColor(i8DefaultColor);
    }
    props.setTotalPrice(props.model.price + props.color.price);
  }, [props.color, props.model]);

  const listClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (!button.classList.contains("selected")) {
      const prevColorPrice = props.color.price;
      const selectedColor: Color = {
        id:
          button.dataset.modelcolor !== undefined
            ? button.dataset.modelcolor
            : "",
        name: button.dataset.name !== undefined ? button.dataset.name : "",
        price:
          button.dataset.price !== undefined
            ? parseInt(button.dataset.price)
            : 0,
        imageUrl: button.dataset.src !== undefined ? button.dataset.src : "",
      };
      props.setColor(selectedColor);
      props.setTotalPrice(
        props.totalPrice -
          prevColorPrice +
          parseInt(
            button.dataset.price !== undefined ? button.dataset.price : "0"
          )
      );
    }
  };

  return (
    <li
      data-selection="colors"
      className={`builder-step ${props.step === 2 ? "active" : ""}`}
    >
      <section className="cd-step-content">
        <header>
          <h1>Select Color</h1>
          <span className="steps-indicator">
            Step <b>2</b> of 4
          </span>
        </header>
        <ul className="cd-product-previews">
          {props.model.id === "product-01"
            ? i3Colors.map(function (color) {
                return (
                  <li
                    key={I3_MODEL + color.id}
                    className={color.id === props.color.id ? "selected" : ""}
                  >
                    <img
                      src={require("./img/" + color.imageUrl)}
                      alt="Product Preview"
                      className="product-preview"
                    />
                  </li>
                );
              })
            : i8Colors.map(function (color) {
                return (
                  <li
                    key={I8_MODEL + color.id}
                    className={color.id === props.color.id ? "selected" : ""}
                  >
                    <img
                      src={require("./img/" + color.imageUrl)}
                      alt="Product Preview"
                      className="product-preview"
                    />
                  </li>
                );
              })}
        </ul>
        <ul className="cd-product-customizer">
          {props.model.id === "product-01"
            ? i3Colors.map(function (color) {
                return (
                  <li
                    onClick={listClickHandler}
                    data-modelcolor={color.id}
                    key={I3_MODEL + color.id}
                    data-name={color.name}
                    data-content={color.name + " - $" + color.price}
                    data-price={color.price}
                    data-src={color.imageUrl}
                    className={color.id === props.color.id ? "selected" : ""}
                  >
                    <a data-color={color.id} href="#0">
                      {color.name + " - $" + color.price}
                    </a>
                  </li>
                );
              })
            : i8Colors.map(function (color) {
                return (
                  <li
                    onClick={listClickHandler}
                    key={I8_MODEL + color.id}
                    data-name={color.name}
                    data-modelcolor={color.id}
                    data-content={color.name + " - $" + color.price}
                    data-price={color.price}
                    data-src={color.imageUrl}
                    className={color.id === props.color.id ? "selected" : ""}
                  >
                    <a data-color={color.id} href="#0">
                      {color.name + " - $" + color.price}
                    </a>
                  </li>
                );
              })}
        </ul>
      </section>
    </li>
  );
}

export default ColorsStep;
