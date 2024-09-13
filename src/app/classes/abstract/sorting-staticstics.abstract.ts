"use client";

export default abstract class SortingStatisticsAbstract {
  // Statistics
  values: number[] = [];
  states: number[] = [];
  sorted: boolean = false;
  swapCount: number = 0;
  comparisonCount: number = 0;

  // Sorting Statistics getter and setter methods
  public getValues(): number[] {
    return this.values;
  }

  public getStates(): number[] {
    return this.states;
  }

  public getComparisonCount(): number {
    return this.comparisonCount;
  }

  public getSwapCount(): number {
    return this.swapCount;
  }
  public isSorted(): boolean {
    return this.sorted;
  }
}
