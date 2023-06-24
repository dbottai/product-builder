import { Accessory, CarModel, Color } from "./types";

export const I3_MODEL: string = "product-01";
export const I8_MODEL: string = "product-02";

export const enum StepsDirection {
  None = "NONE",
  Left = "LEFT",
  Right = "RIGHT",
}

export const carModels: CarModel[] = [
  {
    id: I3_MODEL,
    name: "BMW i3",
    price: 42400,
    imageUrl: "product01_col01.jpg",
  },
  {
    id: I8_MODEL,
    name: "BMW i8",
    price: 140700,
    imageUrl: "product02_col01.jpg",
  },
];

export const i3Colors: Color[] = [
  {
    id: "white",
    name: "White",
    price: 0,
    imageUrl: "product01_col01.jpg",
  },
  {
    id: "grey",
    name: "Mineral Grey",
    price: 550,
    imageUrl: "product01_col02.jpg",
  },
  {
    id: "orange",
    name: "Orange Metallic",
    price: 550,
    imageUrl: "product01_col03.jpg",
  },
];

export const i8Colors: Color[] = [
  {
    id: "grey",
    name: "Grey Metallic",
    price: 0,
    imageUrl: "product02_col01.jpg",
  },
  {
    id: "perl",
    name: "White Perl Metallic",
    price: 1800,
    imageUrl: "product02_col02.jpg",
  },
];

export const i3Accessories: { [key: string]: Accessory } = {
  "i3-01": {
    name: "BMW Charging Station",
    price: 1080,
  },
  "i3-02": {
    name: "BMW Maintenance Program Upgrade",
    price: 1895,
  },
  "i3-03": {
    name: "1 Year BMW Maintenance Program Upgrade",
    price: 975,
  },
};

export const i8Accessories: { [key: string]: Accessory } = {
  "i8-01": {
    name: "BMW Laserlight",
    price: 6300,
  },
  "i8-02": {
    name: "BMW Charging Station",
    price: 1080,
  },
  "i8-03": {
    name: "BMW Maintenance Program Upgrade",
    price: 1895,
  },
  "i8-04": {
    name: "1 Year BMW Maintenance Program Upgrade",
    price: 975,
  },
};

export const emptyCarModel: CarModel = {
  id: "",
  name: "",
  price: 0,
  imageUrl: "",
};

export const emptyColor: Color = {
  id: "",
  name: "",
  price: 0,
  imageUrl: "",
};

export const i3DefaultColor: Color = {
  id: "white",
  name: "White",
  price: 0,
  imageUrl: "product01_col01.jpg",
};

export const i8DefaultColor: Color = {
  id: "grey",
  name: "Grey Metallic",
  price: 0,
  imageUrl: "product02_col01.jpg",
};
