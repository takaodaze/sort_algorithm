// 昇順に並べる
export const selectionSort = (arr: number[]): number[] => {
  function swap(i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let k = i; // k: provisional minimum index
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }
    swap(i, k);
  }

  return arr;
};

if (import.meta.main) {
  const test = [81, 33, 85, 160, 197, 148, 67, 17, 154, 197];
  console.log(selectionSort(test));
}
