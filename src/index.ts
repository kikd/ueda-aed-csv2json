import download from "download";
const dl = download;

import fs from "fs";
import { parse } from "csv-parse/sync";
import { AEDPlace } from "./types";

const url: string = "http://linkdata.org/api/1/rdf1s1202i/aed_ueda_tsv.txt";
const dir: string = "files";

function dataConvert(row: string[]): AEDPlace {
  /**
   * TSVのindex
   * 1: 施設名
   * 2: 住所
   * 6: latitude(緯度)
   * 7: longtitude(経度)
   */
  const index_name:number=1;
  const index_address:number=2;
  const index_lat:number=6;
  const index_lon:number=7;
  const aed_place = {
    name: row[index_name],
    address: row[index_address],
    lat: parseFloat(row[index_lat]),
    lon: parseFloat(row[index_lon]),
  };
  return aed_place;
}

async function main() {
  await dl(url, dir, { filename: "aed_ueda.tsv" });
  const parse_opt = { delimiter: "\t", from_line: 11 };
  const buf = fs.readFileSync("files/aed_ueda.tsv");
  const rows = parse(buf, parse_opt);
  const aed_data: AEDPlace[] = rows.map((row: string[]) => dataConvert(row));
  const json_string = JSON.stringify(aed_data, null, 2);
  fs.writeFileSync("files/aed_ueda.json", json_string);
}

main();
