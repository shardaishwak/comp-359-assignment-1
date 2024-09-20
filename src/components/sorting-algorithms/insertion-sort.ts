"use client";

import P5 from "p5/index";
import SortingTemplate from "../sorting-template";

export default class InsertionSort extends SortingTemplate {
  constructor(p5: P5, values: number[], width: number, height: number) {
    super(p5, values, width, height);
  }

  private async insertionSort(arr: number[]) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;

      this.deactivateState(i);

      while (j >= 0 && arr[j] > key) {
        this.activateState(j);
        this.incrementComparator();

        await this.sleep();

        arr[j + 1] = arr[j];
        this.incrementSwap();
        this.deactivateState(j);

        j--;
      }
      arr[j + 1] = key;

      this.illuminate(i, i);
    }
  }

  public illuminate(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.activateState(i);
    }
  }

  public async run(values: number[]) {
    this.time = new Date();
    await this.insertionSort(values);
    this.greenAll();
  }
}
