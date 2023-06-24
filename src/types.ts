import { StepsDirection } from "./constants";

export interface Color {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CarModel {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Accessory {
  name: string;
  price: number;
}

export interface Step {
  number: number;
  direction: StepsDirection;
}
