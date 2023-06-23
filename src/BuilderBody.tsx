import React, { Dispatch } from "react";

import ModelStep from "./ModelStep";
import ColorsStep from "./ColorsStep";
import AccessoriesStep from "./AccessoriesStep";
import SummaryStep from "./SummaryStep";
import { Accessory, CarModel, Color } from "./types";

function BuilderBody(props: {
  totalPrice: number;
  setTotalPrice: Dispatch<React.SetStateAction<number>>;
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  step: number;
  color: Color;
  setColor: Dispatch<React.SetStateAction<Color>>;
  accessories: { [key: string]: Accessory };
  setAccessories: Dispatch<React.SetStateAction<{ [key: string]: Accessory }>>;
}) {
  return (
    <div className="cd-builder-steps">
      <ul>
        <ModelStep
          totalPrice={0}
          setTotalPrice={props.setTotalPrice}
          model={props.model}
          setModel={props.setModel}
          setShowAlert={props.setShowAlert}
          step={props.step}
          color={props.color}
          setColor={props.setColor}
        />
        <ColorsStep
          step={props.step}
          model={props.model}
          color={props.color}
          setColor={props.setColor}
          totalPrice={props.totalPrice}
          setTotalPrice={props.setTotalPrice}
        />
        <AccessoriesStep
          step={props.step}
          model={props.model}
          totalPrice={props.totalPrice}
          setTotalPrice={props.setTotalPrice}
          accessories={props.accessories}
          setAccessories={props.setAccessories}
        />
        <SummaryStep
          step={props.step}
          model={props.model}
          color={props.color}
          accessories={props.accessories}
          setAccessories={props.setAccessories}
        />
      </ul>
    </div>
  );
}

export default BuilderBody;
