import React, { Dispatch } from "react";
import { CarModel } from "./types";

interface HeaderProps {
  model: CarModel;
  step: number;
  setStep: Dispatch<React.SetStateAction<number>>;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
}

function Header({ model, step, setStep, setShowAlert }: HeaderProps) {
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
    <header className="main-header">
      <h1>Product Builder</h1>
      <nav
        className={`cd-builder-main-nav ${model.id !== "" ? "" : "disabled"}`}
      >
        <ul>
          <li
            data-step="1"
            onClick={listClickHandler}
            className={step === 1 ? "active" : ""}
          >
            <a href="#models">Models</a>
          </li>
          <li
            data-step="2"
            onClick={listClickHandler}
            className={step === 2 ? "active" : ""}
          >
            <a href="#colors">Colors</a>
          </li>
          <li
            data-step="3"
            onClick={listClickHandler}
            className={step === 3 ? "active" : ""}
          >
            <a href="#accessories">Accessories</a>
          </li>
          <li
            data-step="4"
            onClick={listClickHandler}
            className={step === 4 ? "active" : ""}
          >
            <a href="#summary">Summary</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
