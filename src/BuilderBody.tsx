import React, { Dispatch } from "react";

import ModelStep from "./ModelStep";
import ColorsStep from "./ColorsStep";
import AccessoriesStep from "./AccessoriesStep";
import SummaryStep from "./SummaryStep";
import { Accessory, CarModel, Color } from "./types";

interface BuilderBodyProps {
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
}

function BuilderBody({
  totalPrice,
  setTotalPrice,
  model,
  setModel,
  setShowAlert,
  step,
  color,
  setColor,
  accessories,
  setAccessories,
}: BuilderBodyProps) {
  return (
    <div className="cd-builder-steps">
      <ul>
        <ModelStep
          totalPrice={0}
          setTotalPrice={setTotalPrice}
          model={model}
          setModel={setModel}
          setShowAlert={setShowAlert}
          step={step}
          color={color}
          setColor={setColor}
        />
        <ColorsStep
          step={step}
          model={model}
          color={color}
          setColor={setColor}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <AccessoriesStep
          step={step}
          model={model}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          accessories={accessories}
          setAccessories={setAccessories}
        />
        <SummaryStep
          step={step}
          model={model}
          color={color}
          accessories={accessories}
          setAccessories={setAccessories}
        />
      </ul>
    </div>
  );
}

export default BuilderBody;
