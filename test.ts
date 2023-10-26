import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { bubbleSort } from "./sort/bubble.ts";
import { selectionSort } from "./sort/selection.ts";

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
