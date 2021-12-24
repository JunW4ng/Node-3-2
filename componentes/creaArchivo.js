const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const correoId = uuidv4();

const createFile = (contenido) => {

    fs.writeFile(`./correos/${correoId}.txt`, contenido, "utf8", (err) => {
      console.log(err);
    });
}

module.exports = createFile;