
const fs = require('fs');

const NOTES_DB_FILE_NAME = 'notes-db.json';

const addNote = (title, body) => {
    const note = {
        title,
        body
    };
    const notes = getAll();
    const duplicateNote = notes.find( note => note.title === title);
    if(duplicateNote){
        return;
    }
    notes.push(note);
    save(notes);
    return note;
}

const getAll = () => {
   try {
       const data =  JSON.parse(fs.readFileSync(NOTES_DB_FILE_NAME));
       return data;
   } catch(e){
       console.error(e);
       return [];
   }
}

const removeNote = (title) => {
    var notes = getAll();
    const index = notes.findIndex( note => note.title === title);
    if(index >=0 ){
        notes.splice(index, 1);
        save(notes);
        return 1;
    }else{
        return -1;
    }
}

const save = (notes) => fs.writeFileSync(NOTES_DB_FILE_NAME, JSON.stringify(notes));

module.exports = {
    addNote,
    getAll,
    removeNote
};

