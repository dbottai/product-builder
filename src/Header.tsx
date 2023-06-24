import React, { Dispatch } from "react";
import { CarModel, Step } from "./types";
import { StepsDirection } from "./constants";

interface HeaderProps {
  model: CarModel;
  step: Step;
  setStep: Dispatch<React.SetStateAction<Step>>;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
}

const steps = [
  { number: 1, href: "#models", title: "Models" },
  { number: 2, href: "#colors", title: "Colors" },
  { number: 3, href: "#accessories", title: "Accessories" },
  { number: 4, href: "#summary", title: "Summary" },
];

function Header({ model, step, setStep, setShowAlert }: HeaderProps) {
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
    <header className="main-header">
      <h1>Product Builder</h1>
      <nav
        className={`cd-builder-main-nav ${model.id !== "" ? "" : "disabled"}`}
      >
        <ul>
          {steps.map(function (stepEl) {
            return (
              <li
                key={stepEl.number}
                data-step={stepEl.number}
                onClick={listClickHandler}
                className={step.number === stepEl.number ? "active" : ""}
              >
                <a href={stepEl.href}>{stepEl.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
