import React, { Dispatch } from "react";
import { Accessory, CarModel, Color, Step } from "./types";

interface SummaryStepProps {
  step: Step;
  model: CarModel;
  color: Color;
  accessories: { [key: string]: Accessory };
  setAccessories: Dispatch<React.SetStateAction<{ [key: string]: Accessory }>>;
}

function SummaryStep({
  step,
  model,
  color,
  accessories,
  setAccessories,
}: SummaryStepProps) {
  return (
    <li
      data-selection="summary"
      className={`builder-step ${step.number === 4 ? "active" : ""} `}
    >
      <section className="cd-step-content">
        <header>
          <h1>Summary</h1>
          <span className="steps-indicator">
            Step <b>4</b> of 4
          </span>
        </header>
        <ul className="summary-list">
          <li>
            <h2>Model</h2>
            <img
              src={
                color.imageUrl !== ""
                  ? require("./img/" + color.imageUrl)
                  : require("./img/product01_col01.jpg")
              }
              alt={model.name}
              className="product-preview"
            />
            <h3>{model.name}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed
              laboriosam ratione nulla atque molestias at explicabo aperiam
              reprehenderit culpa nihil, quis totam cupiditate dolores in
              quisquam magnam inventore nobis, rem adipisci eveniet illum.
            </p>
          </li>
          <li data-summary="colors">
            <h2>Color</h2>
            {color.id !== "" ? (
              <span className="summary-color">
                <em className="color-swatch" data-color={color.id}></em>
                <em className="color-label">
                  {color.name + " - $" + color.price.toLocaleString()}
                </em>
              </span>
            ) : (
              ""
            )}
          </li>
          <li data-summary="accessories">
            <h2>Accessories</h2>
            {Object.keys(accessories).length === 0 ? (
              <ul className="summary-accessories">
                <li>
                  <p>No Accessories selected</p>
                </li>
              </ul>
            ) : (
              <ul className="summary-accessories">
                {Object.keys(accessories).map(function (accessory) {
                  return (
                    <li key={accessory}>
                      <p>{accessories[accessory].name}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </section>
    </li>
  );
}

export default SummaryStep;
