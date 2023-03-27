const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// for (i = 0; i < 10; i++) {
//     fs.writeFileSync(dirPath + `/file${i}.txt`, `Hello World! ${i}`);
// }


//  fs.readdir(dirPath, (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.warn(files);
//   });


// fs.readdir(dirPath, (err, files) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
//   files.forEach(file => {
//       console.warn(file);
//   });
// });


fs.readdir(dirPath, (err, files) => {
  if (err) {
      console.error(err);
      return;
  }
  files.forEach((file, index) => {
      console.warn(index, file);
  });
});