import React, { Dispatch } from "react";

import ModelStep from "./ModelStep";
import ColorsStep from "./ColorsStep";
import AccessoriesStep from "./AccessoriesStep";
import SummaryStep from "./SummaryStep";
import { Accessory, CarModel, Color, Step } from "./types";

interface BuilderBodyProps {
  model: CarModel;
  setModel: Dispatch<React.SetStateAction<CarModel>>;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  step: Step;
  color: Color;
  setColor: Dispatch<React.SetStateAction<Color>>;
  accessories: { [key: string]: Accessory };
  setAccessories: Dispatch<React.SetStateAction<{ [key: string]: Accessory }>>;
}

function BuilderBody({
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
          model={model}
          setModel={setModel}
          setShowAlert={setShowAlert}
          step={step}
          // setColor={setColor}
        />
        <ColorsStep
          step={step}
          model={model}
          color={color}
          setColor={setColor}
        />
        <AccessoriesStep
          step={step}
          model={model}
          accessories={accessories}
          setAccessories={setAccessories}
        />
        <SummaryStep
          step={step}
          model={model}
          color={color}
          accessories={accessories}
        />
      </ul>
    </div>
  );
}

export default BuilderBody;
