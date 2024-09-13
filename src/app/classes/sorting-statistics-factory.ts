"use client";

import SortingStatisticsAbstract from "./abstract/sorting-staticstics.abstract";
import SortingTemplate from "./abstract/sorting-template";

// Implement GOF Factory Design Pattern
export default class SortingStatisticsFactory extends SortingStatisticsAbstract {
  constructor(sortingAlgorithm: SortingTemplate) {
    super();

    this.values = sortingAlgorithm.getValues();
    this.states = sortingAlgorithm.getStates();
    this.sorted = sortingAlgorithm.isSorted();
    this.swapCount = sortingAlgorithm.getSwapCount();
    this.comparisonCount = sortingAlgorithm.getComparisonCount();
  }
}
