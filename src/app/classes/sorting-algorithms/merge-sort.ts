"use client";

import Helpers from "@/helpers";
import P5 from "p5/index";
import SortingInterface from "../interfaces/sorting.interface";
import SortingTemplate from "../abstract/sorting-template";

export default class MergeSort
  extends SortingTemplate
  implements SortingInterface
{
  constructor(p5: P5, values: number[], width: number, height: number) {
    super(p5, values, width, height);
  }

  private async mergeSort(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
  ) {
    const p5 = this.p5;
    if (start >= end) return;

    const mid = p5.floor((start + end) / 2);
    await this.mergeSort(arr, start, mid);
    await this.mergeSort(arr, mid + 1, end);
    await this.rec(arr, start, mid, end);
  }

  private async rec(arr: number[], start: number, mid: number, end: number) {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);
    let i = 0,
      j = 0,
      k = start;

    while (i < left.length && j < right.length) {
      this.activateState(k);
      this.incrementComparator();
      await Helpers.sleep(10);
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < left.length) {
      this.activateState(k);
      this.incrementComparator();
      await Helpers.sleep(10);
      arr[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      this.activateState(k);
      this.incrementComparator();
      await Helpers.sleep(10);
      arr[k] = right[j];
      j++;
      k++;
    }

    // NOTE: This is the green color activation meaning what has been checked so far.
    this.illuminate(start, end);
  }

  public illuminate(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.activateState(i);
    }
  }

  public run(values: number[]) {
    this.mergeSort(values);
  }
}
