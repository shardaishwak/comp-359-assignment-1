"use client";

import P5 from "p5/index";
import SortingInterface from "../interfaces/sorting.interface";
import SortingStatisticsAbstract from "./sorting-staticstics.abstract";

// Implement GOF Template Design Pattern
export default abstract class SortingTemplate
  extends SortingStatisticsAbstract
  implements SortingInterface
{
  p5: import("p5");
  windowWidth: number;
  windowHeight: number;

  constructor(p5: P5, values: number[], width: number, height: number) {
    super();

    this.states = new Array(this.values.length).fill(-1);
    this.sorted = false;
    this.comparisonCount = 0;
    this.swapCount = 0;

    this.p5 = p5;
    this.windowWidth = width;
    this.windowHeight = height;
    this.values = values;
  }

  public incrementComparator() {
    this.comparisonCount++;
  }

  public incrementSwap() {
    this.swapCount++;
  }

  public activateState(index: number) {
    this.states[index] = 0;
  }

  public deactivateState(index: number) {
    this.states[index] = 1;
  }

  public abstract run(values: number[]): void;
}
