import React from "react";

function Header() {
  return (
    <header className="main-header">
      <h1>Product Builder</h1>
      <nav className="cd-builder-main-nav">
        <ul>
          <li className="active">
            <a href="#models">Models</a>
          </li>
          <li className="">
            <a href="#colors">Colors</a>
          </li>
          <li>
            <a href="#accessories">Accessories</a>
          </li>
          <li>
            <a href="#summary">Summary</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
