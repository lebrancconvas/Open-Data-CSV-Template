import { 
  convertCSVtoJSON,
  CSVtoJSONFile 
} from "./libs";

async function main() {
  await CSVtoJSONFile("example");
};

main();  