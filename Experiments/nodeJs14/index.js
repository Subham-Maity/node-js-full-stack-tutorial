const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/hello.txt`;

// // Create 
// fs.writeFileSync(filePath, 'Hello from Node.js');

// // Read
// fs.readFile(filePath,`utf-8`,(err, data) => {
//   console.log(data)
// });


// // Update
// fs.appendFile(filePath, 'CodeXam', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// }
 
// );


// // Rename (File Name)

// fs.rename(filePath, `${dirPath}/rename.txt`, (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//     }

// );


// Delete

fs.unlinkSync(`${dirPath}/rename.txt`);





