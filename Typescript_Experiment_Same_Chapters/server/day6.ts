//npm run day6

//Suppose you want to import the whole fs module
import * as fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello World');



//Suppose you want to directly import writeFileSync
// from fs module without importing the whole fs module,
//You can do it like this
import { writeFileSync } from 'fs';


//It will create a file in the current directory
writeFileSync('hello2.txt', 'Hello World 2');


//It will give the current directory path
console.log(__dirname , "dirname");


//It will give the current file path
console.log(__filename , "filename");


//It will give the current file path
console.log(process.cwd() , "cwd");