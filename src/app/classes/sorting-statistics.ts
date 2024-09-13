"use client";

import SortingStatisticsAbstract from "./abstract/sorting-staticstics.abstract";
import SortingTemplate from "./abstract/sorting-template";

export default class SortingStatistics extends SortingStatisticsAbstract {
  constructor(sortingAlgorithm: SortingTemplate) {
    super();

    this.values = sortingAlgorithm.getValues();
    this.states = sortingAlgorithm.getStates();
    this.sorted = sortingAlgorithm.isSorted();
    this.swapCount = sortingAlgorithm.getSwapCount();
    this.comparisonCount = sortingAlgorithm.getComparisonCount();
  }
}
