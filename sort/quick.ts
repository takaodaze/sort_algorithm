export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr[pivotIdx];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIdx) continue;
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

if (import.meta.main) {
  const test = [81, 33, 85, 160, 197, 148, 3, 42];
  const res = quickSort(test);
  console.log(res);
}
