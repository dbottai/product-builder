import React, { Dispatch } from "react";

import { CarModel, Color } from "./types";
import {
  emptyCarModel,
  carModels,
  emptyColor,
  I3_MODEL,
  i3DefaultColor,
  I8_MODEL,
  i8DefaultColor,
} from "./constants";

function ModelStep(props: {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  step: number;
  color: Color;
  setColor: Dispatch<React.SetStateAction<Color>>;
}) {
  const modelOptionClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (button.classList.contains("selected")) {
      props.setModel(emptyCarModel);
      props.setColor(emptyColor);
      props.setShowAlert(false);
      props.setTotalPrice(0);
    } else {
      const price: number =
        button.dataset.price !== undefined ? parseInt(button.dataset.price) : 0;

      const selectedModel: CarModel = {
        name: button.dataset.name !== undefined ? button.dataset.name : "",
        price: price,
        id: button.dataset.model !== undefined ? button.dataset.model : "",
        imageUrl:
          button.dataset.image !== undefined ? button.dataset.image : "",
      };

      if (selectedModel.id === I3_MODEL) {
        props.setColor(i3DefaultColor);
      } else if (selectedModel.id === I8_MODEL) {
        props.setColor(i8DefaultColor);
      }

      props.setModel(selectedModel);
    }
  };

  return (
    <li
      data-selection="models"
      className={`builder-step ${props.step === 1 ? "active" : ""}`}
    >
      <section className="cd-step-content">
        <header>
          <h1>Select Model</h1>
          <span className="steps-indicator">
            Step <b>1</b> of 4
          </span>
        </header>
        <ul className="models-list options-list cd-col-2">
          {carModels.map(function (carModel) {
            return (
              <li
                key={carModel.id}
                onClick={modelOptionClickHandler}
                className={`js-option js-radio ${
                  carModel.id === props.model.id ? "loaded selected" : ""
                }`}
                data-name={carModel.name}
                data-price={carModel.price}
                data-model={carModel.id}
                data-image={carModel.imageUrl}
              >
                <span className="name">{carModel.name}</span>
                <img
                  src={require("./img/" + carModel.imageUrl)}
                  alt={carModel.name}
                />
                <span className="price">
                  {"from $" + carModel.price.toLocaleString()}
                </span>
                <div className="radio"></div>
              </li>
            );
          })}
        </ul>
      </section>
    </li>
  );
}

export default ModelStep;
