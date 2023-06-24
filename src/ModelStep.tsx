import React, { Dispatch } from "react";

import { CarModel, Color, Step } from "./types";
import { emptyCarModel, carModels, StepsDirection, emptyColor, i3DefaultColor, I3_MODEL, I8_MODEL, i8DefaultColor } from "./constants";

interface ModelStepProps {
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  setColor: Dispatch<React.SetStateAction<Color>>;
  step: Step;
}
function ModelStep({ model, setModel, setShowAlert, step, setColor }: ModelStepProps) {
  const modelOptionClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    if (button.classList.contains("selected")) {
      setModel(emptyCarModel);
      setColor(emptyColor);
      setShowAlert(false);
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
        setColor(i3DefaultColor);
      } else if (selectedModel.id === I8_MODEL) {
        setColor(i8DefaultColor);
      }

      setModel(selectedModel);
      setShowAlert(false);
    }
  };

  return (
    <li
      data-selection="models"
      className={`builder-step ${step.number === 1 ? "active" : ""} ${
        step.number === 1 && step.direction === StepsDirection.Left
          ? "back"
          : ""
      } ${
        step.number > 1 && step.direction === StepsDirection.Right
          ? "move-left"
          : ""
      }`}
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
                  carModel.id === model.id ? "loaded selected" : ""
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
