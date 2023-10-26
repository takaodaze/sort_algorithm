// 昇順に並べる
export const insertionSort = (arr: number[]): number[] => {
  // arr[s]の前にarr[t]を挿入する
  function insert(s: number, t: number) {
    for (; s < t; t--) {
      const temp = arr[t - 1];
      arr[t - 1] = arr[t];
      arr[t] = temp;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    let j = 0;
    for (; j < i; j++) {
      if (arr[j] > arr[i]) {
        break;
      }
    }
    insert(j, i);
  }
  return arr;
};

if (import.meta.main) {
  const test = [81, 33, 85, 160, 197, 148, 67, 17, 154, 197];
  console.log(insertionSort(test));
}
