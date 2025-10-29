import { convertCSVtoJSON } from "./libs";

async function main() {
  const result = await convertCSVtoJSON("example");
  console.log(result);
};


main();  