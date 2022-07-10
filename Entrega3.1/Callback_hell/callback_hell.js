
const {
  readdir,
  readFile,
  writeFile,
} = require("fs");
const {
  join
} = require("path");

const fs = require("fs");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");



const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

const ruta = './outbox';

!fs.existsSync(ruta) ? fs.mkdirSync(ruta): console.log("Ja existeix la carpeta amb aquest nom"); 
  
// Read and reverse contents of text files in a directory

const iterationFiles = (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach((file) => readingFiles(file));
};

const readingFiles = (file) => {
  const result = (error, data) => {
    if (error) return console.log("Error: File error");
    reverseFile(data);
  };

  const reverseFile = (data) => {
    writeFile(join(outbox, file), reverseText(data), (error) => {
      if (error) return console.log("Error: File could not be saved!");
      console.log(`${file} was successfully saved in the outbox!`);
    });
  };
  
  readFile(join(inbox, file), "utf8", result);
};

readdir(inbox, iterationFiles);

















