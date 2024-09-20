import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectAlgorithm({
  chooseAlgorithm,
}: {
  chooseAlgorithm: (algorithm: string) => void;
}) {
  return (
    <Select onValueChange={chooseAlgorithm}>
      <SelectTrigger className='w-[180px] bg-white'>
        <SelectValue placeholder='Select an algorithm' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="merge-sort">MergeSort</SelectItem>
          <SelectItem value="quick-sort">QuickSort</SelectItem>
          <SelectItem value="bubble-sort">Bubble Sort</SelectItem>
          <SelectItem value="selection-sort">Selection Sort</SelectItem>
          <SelectItem value="insertion-sort">Insertion Sort</SelectItem>
          <SelectItem value="shell-sort">Shell Sort</SelectItem>
          <SelectItem value="heap-sort">Heap Sort</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
