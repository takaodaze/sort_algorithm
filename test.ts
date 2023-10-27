import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { bubbleSort } from "./sort/bubble.ts";
import { selectionSort } from "./sort/selection.ts";
import { insertionSort } from "./sort/insertion.ts";
import { mergeSort, recurciveMergeSort } from "./sort/merge.ts";
import { quickSort } from "./sort/quick.ts";

const rawTestDataJson = Deno.readTextFileSync("./test_data.json");

const testdata = JSON.parse(rawTestDataJson).data as number[][];
// slice で clone
const sortedTestdata = testdata.map((arr) => arr.slice()).map((arr) =>
  arr.sort((a, b) => a - b)
);

Deno.test(function bubble() {
  for (let i = 0; i < testdata.length; i++) {
    assertEquals(bubbleSort(testdata[i]), sortedTestdata[i]);
  }
});

Deno.test(function selection() {
  for (let i = 0; i < testdata.length; i++) {
    assertEquals(selectionSort(testdata[i]), sortedTestdata[i]);
  }
});

Deno.test(function insertion() {
  for (let i = 0; i < testdata.length; i++) {
    assertEquals(insertionSort(testdata[i]), sortedTestdata[i]);
  }
});

Deno.test(function merge() {
  for (let i = 0; i < testdata.length; i++) {
    assertEquals(mergeSort(testdata[i]), sortedTestdata[i]);
  }
});

Deno.test(function recurciveMerge() {
  for (let i = 0; i < testdata.length; i++) {
    assertEquals(recurciveMergeSort(testdata[i]), sortedTestdata[i]);
  }
});

Deno.test(function quick() {
  for (let i = 0; i < testdata.length; i++) {
    assertEquals(quickSort(testdata[i]), sortedTestdata[i]);
  }
});
