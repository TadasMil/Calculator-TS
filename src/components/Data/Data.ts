import { IButton } from "../Interfaces/IButton";

export const multiOperators: IButton[] = [
  { id: 1, description: "%", type: "%" },
  { id: 2, description: "CE", type: "CE" },
  { id: 3, description: "C", type: "C" },
  { id: 4, description: "1/x", type: "1/x" },
  { id: 5, description: "x2", type: "x2" },
  { id: 6, description: "x", type: "rootX" },
];

export const numbersData: IButton[] = [
  {
    id: 1,
    description: 7,
    type: 7,
  },
  {
    id: 2,
    description: 8,
    type: 8,
  },
  {
    id: 3,
    description: 9,
    type: 9,
  },
  {
    id: 4,
    description: 4,
    type: 4,
  },
  {
    id: 5,
    description: 5,
    type: 5,
  },
  {
    id: 6,
    description: 6,
    type: 6,
  },
  {
    id: 7,
    description: 1,
    type: 1,
  },
  {
    id: 8,
    description: 2,
    type: 2,
  },
  {
    id: 9,
    description: 3,
    type: 3,
  },
  {
    id: 10,
    description: "minus",
    type: "+/-",
  },
  {
    id: 11,
    description: 0,
    type: 0,
  },
  {
    id: 12,
    description: "comma",
    type: ",",
  },
];

export const singleOperators: IButton[] = [
  { id: 1, description: "-", type: "del" },
  { id: 2, description: "-", type: "-" },
  { id: 3, description: "+", type: "+" },
  { id: 4, description: "/", type: "/" },
  { id: 5, description: "*", type: "*" },
  { id: 6, description: "=", type: "=" },
];
