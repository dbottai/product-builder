import React, { Dispatch, useState } from "react";

import bmwi3 from "./img/product01_col01.jpg";
import bmwi8 from "./img/product02_col01.jpg";

function BuilderBody(props: {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  clickedButton: string | undefined;
  setClickedButton: Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const buttonHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("clicked");

    const button: HTMLLIElement = event.currentTarget;

    if (button.classList.contains("selected")) {
      props.setClickedButton(undefined);
      props.setTotalPrice(0);
    } else {
      const price: number =
        button.dataset.price !== undefined ? parseInt(button.dataset.price) : 0;
      props.setClickedButton(button.dataset.model);
      props.setTotalPrice(price);
    }
  };

  return (
    <div className="cd-builder-steps">
      <ul>
        <li data-selection="models" className="builder-step active back">
          <section className="cd-step-content">
            <header>
              <h1>Select Model</h1>
              <span className="steps-indicator">
                Step <b>1</b> of 4
              </span>
            </header>
            <ul className="models-list options-list cd-col-2">
              <li
                onClick={buttonHandler}
                className={`js-option js-radio ${
                  props.clickedButton !== undefined &&
                  props.clickedButton === "product-01"
                    ? "loaded selected"
                    : ""
                }`}
                data-price="42400"
                data-model="product-01"
              >
                <span className="name">BMW i3</span>
                <img src={bmwi3} alt="BMW i3" />
                <span className="price">from $42.400</span>
                <div className="radio"></div>
              </li>
              <li
                onClick={buttonHandler}
                className={`js-option js-radio ${
                  props.clickedButton !== undefined &&
                  props.clickedButton === "product-02"
                    ? "loaded selected"
                    : ""
                }`}
                data-price="140700"
                data-model="product-02"
              >
                <span className="name">BMW i8</span>
                <img src={bmwi8} alt="BMW i8" />
                <span className="price">from $140.700</span>
                <div className="radio"></div>
              </li>
            </ul>
          </section>
        </li>
        <li data-selection="colors" className="builder-step">
          <section className="cd-step-content">
            <header>
              <h1>Select Color</h1>
              <span className="steps-indicator">
                Step <b>2</b> of 4
              </span>
            </header>
            <ul className="cd-product-previews">
              {/* <li className="selected"><img src="img/product02_col01.jpg" alt="Product Preview" className="product-preview"></li> */}
              {/* <li><img src="img/product02_col02.jpg" alt="Product Preview" className="product-preview"></li> */}
            </ul>
            <ul className="cd-product-customizer">
              <li
                data-content="Grey Metallic - $0"
                data-price="0"
                className="selected"
              >
                <a data-color="grey" href="#0">
                  Grey Metallic - $0
                </a>
              </li>
              <li data-content="White Perl Metallic - $1.800" data-price="1800">
                <a data-color="perl" href="#0">
                  White Perl Metallic - $1.800
                </a>
              </li>
            </ul>
          </section>
        </li>
        <li data-selection="accessories" className="builder-step">
          <section className="cd-step-content">
            <header>
              <h1>Accessories</h1>
              <span className="steps-indicator">
                Step <b>3</b> of 4
              </span>
            </header>
            <ul className="accessories-list options-list">
              <li className="js-option" data-price="6300">
                <p>BMW Laserlight</p>
                <span className="price">$6.300</span>
                <div className="check"></div>
              </li>
              <li className="js-option" data-price="1080">
                <p>BMW Charging Station</p>
                <span className="price">$1.080</span>
                <div className="check"></div>
              </li>
              <li className="js-option" data-price="1895">
                <p>BMW Maintenance Program Upgrade</p>
                <span className="price">$1.895</span>
                <div className="check"></div>
              </li>
              <li className="js-option" data-price="975">
                <p>1 Year BMW Maintenance Program Upgrade</p>
                <span className="price">$975</span>
                <div className="check"></div>
              </li>
            </ul>
          </section>
        </li>
        <li data-selection="summary" className="builder-step">
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
                {/* <img src="img/product02_col01.jpg" alt="Alfa Romeo Giulietta" className="product-preview"> */}
                <h3>BMW i8</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis
                  sed laboriosam ratione nulla atque molestias at explicabo
                  aperiam reprehenderit culpa nihil, quis totam cupiditate
                  dolores in quisquam magnam inventore nobis, rem adipisci
                  eveniet illum.
                </p>
              </li>
              <li data-summary="colors">
                <h2>Color</h2>
                <span className="summary-color">
                  <em className="color-swatch" data-color="red"></em>
                  <em className="color-label">Red Passion</em>
                </span>
              </li>
              <li data-summary="accessories">
                <h2>Accessories</h2>
                <ul className="summary-accessories">
                  <li>
                    <p>
                      Uconnect 6.5" colour touchscreen radio navigation sytem
                      with Bluetooth &amp; DAB ($1050)
                    </p>
                  </li>
                  <li>
                    <p>
                      Audio &amp; telephone controls on steering wheels ($750)
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </div>
  );
}

export default BuilderBody;
