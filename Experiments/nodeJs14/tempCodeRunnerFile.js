fs.rename(filePath, `${dirPath}/rename.txt`, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
    }

);