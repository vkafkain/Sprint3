const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory
/* readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
}); */

readdir(inbox, checkFolder);

const checkFolder = (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(readingFile)
}

const readingFile = file => {
  readFile (join(inbox, file), "utf8", writingFile);
  
const writingFile = (error, data) => {
  if (error) return console.log("Error: File error");
  writeFile(join(outbox, file), reverseText(data), filterError);
}

const filterError = error => {
  if (error) return console.log("Error: File could not be saved!");
  console.log(`${file} was successfully saved in the outbox!`);
  }
}