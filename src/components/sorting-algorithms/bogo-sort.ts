"use client";

import P5 from "p5/index";
import SortingTemplate from "../sorting-template";

// best sorting algorithm, can theoretically sort instantaneously
export default class BogoSort extends SortingTemplate {
  constructor(p5: P5, values: number[], width: number, height: number) {
    super(p5, values, width, height);
  }

  private isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // if you throw french fries enough times,
  // they'll eventually land on top of each other
  // enjoy the seizure inducement
  private shuffle(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  private async bogoSort(arr: number[]) {
    while (!this.isSorted(arr)) {
      this.shuffle(arr);
      this.incrementComparator();
      await this.sleep();

      for (let i = 0; i < arr.length; i++) {
        this.activateState(i);
      }
    }

    this.illuminate(0, arr.length - 1);
  }

  public illuminate(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.activateState(i);
    }
  }

  public async run(values: number[]) {
    this.time = new Date();
    await this.bogoSort(values);
    this.onFinish();
  }
}
