// 昇順に並べる
export const bubbleSort = (arr: number[]): number[] => {
  function swap(i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
  return arr;
};

if (import.meta.main) {
  const test = [81, 33, 85, 160, 197, 148, 67, 17, 154, 197];
  console.log(bubbleSort(test));
}
