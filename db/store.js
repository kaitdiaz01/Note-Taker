// require the util
// util is a built in feature of node like fs
const util = require('util');
const fs = require('fs');

const uuidv1 = require('uuid/v1');

// writeToFile 
const writeToFile = util.promisify(fs.writeFile);
// readToFile
const readToFile = util.promisify(fs.readFile);


// require the uuid/v1 package in your package json
class Store {
    read() {
        return readToFile('./db.json');

    }
    write(note) {
        return writeToFile('./db.json', JSON.stringify(note))
    }
    // get the notes
    getNotes() {

    }
    // add some notes
    addNotes() {
        
    }
    // delete notes for bonus
}

module.exports = new Store();
