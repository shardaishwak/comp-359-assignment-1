"use client";

import P5 from "p5/index";
import SortingTemplate from "../sorting-template";

export default class ShellSort extends SortingTemplate {
  constructor(p5: P5, values: number[], width: number, height: number) {
    super(p5, values, width, height);
  }

  private async shellSort(arr: number[]) {
    const n = arr.length;

    // set gap to middle of array
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      // set i to gap then increment
      for (let i = gap; i < n; i++) {
        this.deactivateState(i);

        // value to be inserted
        const temp = arr[i];
        let j: number;

        // move temp to the left if it's smaller than arr[j-gap]
        // basically selection sort but have a gap between 2 elements
        for (j = i; temp < arr[j - gap] && j >= gap; j -= gap) {
          this.deactivateState(j - gap);
          this.incrementComparator();

          await this.sleep();

          arr[j] = arr[j - gap];
          this.incrementSwap();
          this.activateState(j - gap);
        }

        arr[j] = temp;

        this.illuminate(j, i);
      }
    }
  }

  public illuminate(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.activateState(i);
    }
  }

  public async run(values: number[]) {
    this.time = new Date();
    await this.shellSort(values);
    this.onFinish();
    this.greenAll();
  }
}
