// 昇順に並べる 2^k サイズの配列しか処理できない...
export const mergeSort = (arr: number[]): number[] => {
  function merge(s1: number, e1: number, s2: number, e2: number) {
    const memoS1 = s1;
    const merged = [];

    while (s1 <= e1 && s2 <= e2) {
      if (arr[s1] <= arr[s2]) {
        merged.push(arr[s1]);
        s1++;
      } else {
        merged.push(arr[s2]);
        s2++;
      }
    }

    while (s1 <= e1) {
      merged.push(arr[s1]);
      s1++;
    }

    while (s2 <= e2) {
      merged.push(arr[s2]);
      s2++;
    }

    for (let i = 0; i < merged.length; i++) arr[memoS1 + i] = merged[i];
  }

  for (let i = 0;; i++) {
    const span = 2 ** i;
    if (span * 2 > arr.length) break;

    let s1, s2, e1, e2 = 0;
    while (true) {
      s1 = e2;
      e1 = s1 + span - 1;
      s2 = e1 + 1;
      e2 = s2 + span - 1;

      if (e2 >= arr.length) break;

      merge(s1, e1, s2, e2);
      e2++;
    }
  }

  return arr;
};

if (import.meta.main) {
  const test = [
    81,
    33,
    85,
    160,
    197,
    148,
    67,
    17,
    154,
    197,
    1,
    3,
    42,
    15,
    100,
    23,
  ];
  console.log(mergeSort(test));
}
