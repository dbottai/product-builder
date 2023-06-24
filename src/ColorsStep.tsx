import React, { Dispatch, useEffect } from "react";

import {
  I3_MODEL,
  I8_MODEL,
  StepsDirection,
  emptyColor,
  i3Colors,
  i3DefaultColor,
  i8Colors,
  i8DefaultColor,
} from "./constants";
import { CarModel, Color, Step } from "./types";

interface ColorStepsProps {
  step: Step;
  model: CarModel;
  color: Color;
  setColor: Dispatch<React.SetStateAction<Color>>;
}

function ColorsStep({ step, model, color, setColor }: ColorStepsProps) {
  useEffect(() => {
    if (model.id === I3_MODEL) {
      setColor(i3DefaultColor);
    } else if (model.id === I8_MODEL) {
      setColor(i8DefaultColor);
    } else setColor(emptyColor);
  }, [model, setColor]);

  const listClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (!button.classList.contains("selected")) {
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
      setColor(selectedColor);
    }
  };

  return (
    <li
      data-selection="colors"
      className={`builder-step ${step.number === 2 ? "active" : ""} ${
        step.number === 2 && step.direction === StepsDirection.Left
          ? "back"
          : ""
      } ${
        step.number > 2 && step.direction === StepsDirection.Right
          ? "move-left"
          : ""
      }`}
    >
      <section className="cd-step-content">
        <header>
          <h1>Select Color</h1>
          <span className="steps-indicator">
            Step <b>2</b> of 4
          </span>
        </header>
        <ul className="cd-product-previews">
          {model.id === I3_MODEL
            ? i3Colors.map(function (colorEl) {
                return (
                  <li
                    key={I3_MODEL + colorEl.id}
                    className={colorEl.id === color.id ? "selected" : ""}
                  >
                    <img
                      src={require("./img/" + colorEl.imageUrl)}
                      alt="Product Preview"
                      className="product-preview"
                    />
                  </li>
                );
              })
            : i8Colors.map(function (colorEl) {
                return (
                  <li
                    key={I8_MODEL + colorEl.id}
                    className={colorEl.id === color.id ? "selected" : ""}
                  >
                    <img
                      src={require("./img/" + colorEl.imageUrl)}
                      alt="Product Preview"
                      className="product-preview"
                    />
                  </li>
                );
              })}
        </ul>
        <ul className="cd-product-customizer">
          {model.id === I3_MODEL
            ? i3Colors.map(function (colorEl) {
                return (
                  <li
                    onClick={listClickHandler}
                    data-modelcolor={colorEl.id}
                    key={I3_MODEL + colorEl.id}
                    data-name={colorEl.name}
                    data-content={colorEl.name + " - $" + colorEl.price}
                    data-price={colorEl.price}
                    data-src={colorEl.imageUrl}
                    className={color.id === colorEl.id ? "selected" : ""}
                  >
                    <a data-color={colorEl.id} href="#0">
                      {colorEl.name + " - $" + colorEl.price}
                    </a>
                  </li>
                );
              })
            : i8Colors.map(function (colorEl) {
                return (
                  <li
                    onClick={listClickHandler}
                    key={I8_MODEL + colorEl.id}
                    data-name={colorEl.name}
                    data-modelcolor={colorEl.id}
                    data-content={colorEl.name + " - $" + colorEl.price}
                    data-price={colorEl.price}
                    data-src={colorEl.imageUrl}
                    className={color.id === colorEl.id ? "selected" : ""}
                  >
                    <a data-color={colorEl.id} href="#0">
                      {colorEl.name + " - $" + colorEl.price}
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
