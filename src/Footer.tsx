import React, { Dispatch } from "react";
import product from "./img/product01_col01.jpg";

function Footer(props: {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  clickedButton: string | undefined;
  setClickedButton: Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <footer
      className={`cd-builder-footer step-1 ${
        props.clickedButton === undefined ? "disabled" : ""
      }`}
    >
      <div className="selected-product">
        <img src={product} alt="Product preview" />
        <div className="tot-price">
          <span>Total</span>
          <span className="total">
            $<b>{props.totalPrice}</b>
          </span>
        </div>
      </div>
      <nav className="cd-builder-secondary-nav">
        <ul>
          <li className="next nav-item">
            <ul>
              <li className="visible">
                <a href="#0">Colors</a>
              </li>
              <li className="">
                <a href="#0">Accessories</a>
              </li>
              <li>
                <a href="#0">Summary</a>
              </li>
              <li className="buy">
                <a href="#0">Buy Now</a>
              </li>
            </ul>
          </li>
          <li className="prev nav-item">
            <ul>
              <li className="visible">
                <a href="#0">Models</a>
              </li>
              <li className="">
                <a href="#0">Models</a>
              </li>
              <li>
                <a href="#0">Colors</a>
              </li>
              <li>
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
