import parserCsv from "../parser";
import {Author} from "../interfaces";


parserCsv<Author>("../data/magazines.csv").then(res => {
    
}).catch(err => {
    console.log(err);
})
