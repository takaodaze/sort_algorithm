if (!import.meta.main) {
  console.log("このソースファイルしてください");
  Deno.exit(1);
}

const testData = [];
const size = 10;
const range = 200;
for (let i = 0; i < 20; i++) {
  const arr = [];
  for (let j = 0; j < size; j++) {
    const randomNum = Math.floor(Math.random() * range);
    arr.push(randomNum);
  }
  testData.push(arr);
}

const testJson = {
  data: testData,
};

Deno.writeTextFileSync(
  "./test_data.json",
  JSON.stringify(testJson),
);
