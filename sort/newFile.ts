import { mergeSort } from "./merge.ts";

if (import.meta.main) {
  const test = [
    81,
    33,
    85,
    160,
    197,
    148,
    3,
    42,
  ];
  console.log(mergeSort(test));
}
