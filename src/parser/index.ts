import { parse } from "csv-parse";
import { readFile } from "fs";

function parserCsv<T>(filepath: string):Promise<T[]> {
    return new Promise((resolve, reject)=> {
        readFile(filepath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) {
              reject(err);
            } else {
              let dataStr: string = data.toString();
              let result: T[] = [];
              parse(dataStr, { delimiter: [";"], columns: true, trim: true })
                .on("data", (chunk: T) => {
                  result.push(chunk);
                })
                .on("error", (err: any) => {
                  reject(err);
                })
                .on("end", () => {
                  resolve(result);
                });
            }
          });
    })
}

export default parserCsv;