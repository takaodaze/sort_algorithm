function merge(l: number[], r: number[]): number[] {
  const merged: number[] = [];
  while (l.length > 0 && r.length > 0) {
    if (l[0] <= r[0]) {
      merged.push(l.shift() ?? -1); // ?? -1 はコンパイルエラーの回避策
    } else {
      merged.push(r.shift() ?? -1);
    }
  }

  while (l.length > 0) {
    merged.push(l.shift() ?? -1);
  }

  while (r.length > 0) {
    merged.push(r.shift() ?? -1);
  }

  return merged;
}

export const mergeSort = (arr: number[]): number[] => {
  let separated = arr.map((e) => [e]);
  let merged = [];

  while (true) {
    for (let i = 0; i < separated.length; i += 2) {
      const l = separated[i];
      const r = i === separated.length - 1 ? [] : separated[i + 1]; // current が奇数なら i が右はじまで来るので、その際は空の配列をダミーで与える
      merged.push(merge(l, r));
    }
    separated = merged;
    if (merged.length === 1) break;
    merged = [];
  }

  return merged[0];
};

if (import.meta.main) {
  const test = [81, 33, 85, 160, 197, 148, 3, 42];
  console.log(mergeSort(test));
}
