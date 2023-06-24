import React, { Dispatch, useEffect } from "react";

import {
  I3_MODEL,
  I8_MODEL,
  StepsDirection,
  i3Accessories,
  i8Accessories,
} from "./constants";
import { Accessory, CarModel, Step } from "./types";

interface AccessoriesStepProps {
  step: Step;
  model: CarModel;
  accessories: { [key: string]: Accessory };
  setAccessories: Dispatch<React.SetStateAction<{ [key: string]: Accessory }>>;
}

function AccessoriesStep({
  step,
  model,
  accessories,
  setAccessories,
}: AccessoriesStepProps) {
  useEffect(() => {
    setAccessories({});
  }, [model, setAccessories]);
  const listClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;

    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = button.dataset.price;

    if (button.classList.contains("selected")) {
      if (button.dataset.id !== undefined) {
        const { [button.dataset.id]: deleted, ...rest } = accessories;
        setAccessories(rest);
      }
    } else {
      if (id !== undefined && name !== undefined && price !== undefined) {
        const selectedAccessory = {
          name: name,
          price: parseInt(price),
        };

        setAccessories({
          ...accessories,
          ...{ [id]: selectedAccessory },
        });
      }
    }
  };

  return (
    <li
      data-selection="accessories"
      className={`builder-step ${step.number === 3 ? "active" : ""} ${
        step.number === 3 && step.direction === StepsDirection.Left
          ? "back"
          : ""
      } ${
        step.number > 3 && step.direction === StepsDirection.Right
          ? "move-left"
          : ""
      }`}
    >
      <section className="cd-step-content">
        <header>
          <h1>Accessories</h1>
          <span className="steps-indicator">
            Step <b>3</b> of 4
          </span>
        </header>
        <ul className="accessories-list options-list">
          {model.id === I3_MODEL
            ? Object.keys(i3Accessories).map(function (accessory) {
                return (
                  <li
                    onClick={listClickHandler}
                    key={I3_MODEL + i3Accessories[accessory].name}
                    className={`js-option ${
                      accessories[accessory] ? "selected" : ""
                    }`}
                    data-id={accessory}
                    data-price={i3Accessories[accessory].price}
                    data-name={i3Accessories[accessory].name}
                  >
                    <p>{i3Accessories[accessory].name}</p>
                    <span className="price">
                      {"$" + i3Accessories[accessory].price.toLocaleString()}
                    </span>
                    <div className="check"></div>
                  </li>
                );
              })
            : Object.keys(i8Accessories).map(function (accessory) {
                return (
                  <li
                    onClick={listClickHandler}
                    key={I8_MODEL + i8Accessories[accessory].name}
                    className={`js-option ${
                      accessories[accessory] ? "selected" : ""
                    }`}
                    data-id={accessory}
                    data-price={i8Accessories[accessory].price}
                    data-name={i8Accessories[accessory].name}
                  >
                    <p>{i8Accessories[accessory].name}</p>
                    <span className="price">
                      {"$" + i8Accessories[accessory].price.toLocaleString()}
                    </span>
                    <div className="check"></div>
                  </li>
                );
              })}
        </ul>
      </section>
    </li>
  );
}

export default AccessoriesStep;
