"use client";

import P5 from "p5/index";
import SortingTemplate from "../sorting-template";

export default class HeapSort extends SortingTemplate {
  constructor(p5: P5, values: number[], width: number, height: number) {
    super(values, width, height);
  }

  private async heapify(arr: number[], n: number, i: number) {
    let largest = i;  
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      // Swap
      this.activateState(i);
      this.activateState(largest);
      await this.sleep();
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.incrementSwap();

      await this.heapify(arr, n, largest);
    }
  }

  public async heapSort(arr: number[]) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await this.heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      this.activateState(0);
      this.activateState(i);
      await this.sleep();
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.incrementSwap();

      await this.heapify(arr, i, 0);

      this.deactivateState(i);
    }
    this.greenAll();
  }

  public async run(values: number[]) {
    this.time = new Date();
    await this.heapSort(values);
    this.onFinish();
  }
}
