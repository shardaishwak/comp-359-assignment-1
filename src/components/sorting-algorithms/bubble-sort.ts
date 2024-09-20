"use client";

import P5 from "p5/index";
import SortingTemplate from "../sorting-template";

export default class BubbleSort extends SortingTemplate {
  constructor(p5: P5, values: number[], width: number, height: number) {
    super(p5, values, width, height);
  }

  private async bubbleSort(arr: number[]) {
    const n = arr.length;
    let swapped: boolean;

    for (let i = 0; i < n; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        this.incrementComparator();

        await this.sleep();

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          this.incrementSwap();
          swapped = true;
        }

        this.activateState(j);
        this.activateState(j + 1);
      }

      this.illuminate(n - i - 1, n - i - 1);

      if (!swapped) break;
    }
  }

  public illuminate(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.deactivateState(i);
    }
  }

  public async run(values: number[]) {
    this.time = new Date();
    await this.bubbleSort(values);
    this.onFinish();
    this.greenAll();
  }
}
