import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { bubbleSort } from "./bubble.ts";

Deno.test(function bubble() {
  assertEquals(bubbleSort([4,5,1]),[1,4,5]);
});
