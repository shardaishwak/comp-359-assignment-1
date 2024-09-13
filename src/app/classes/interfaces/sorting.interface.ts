"use client";

import P5 from "p5/index";

export default interface SortingInterface {
  // Attributes
  p5: P5;
  windowWidth: number;
  windowHeight: number;
  values: number[];

  // Sorting methods
  run(values: number[]): void;
}
