console.log("Starting the app...");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs
             .command(
                 'add', 'Add a note', {
                 title: {
                     describe: "Note title",
                     demand: true,
                     alias: 't'
                 },
                 body: {
                     describe: 'Content of the note',
                     demand: true,
                     alias: 'b'
                 }
             })
             .command(
                'remove', 'Remove a note', {
                title: {
                    describe: "Note title to be removed",
                    demand: true,
                    alias: 't'
                }
            })
            .command(
                'read', 'Read a note', {
                title: {
                    describe: "Note title to be read",
                    demand: true,
                    alias: 't'
                }
            })
            .command('list', 'View all notes', {})
             .help()
             .argv;

const command = argv._[0];
if( command === 'add'){
  const note =  notes.addNote(argv.title, argv.body);
  if(note){
      console.log('====================================');
      console.log("Note added with below details");
      console.log(`Title : ${note.title}, Body: ${note.body}`);
      console.log('====================================');
  }else{
      console.log(`Note title is already taken`);
  }
} else if(command == "remove"){
   const isRemoved = notes.removeNote(argv.title);
   if(isRemoved){
    console.log('Removed the note with title:', title);
   }else{
      console.log(`Note ${title} not found.`);
   }
} else if(command === 'read'){
    const note = notes.findNote(argv.title);
    if(note) {
        console.log(`Title: ${note.title}\nBody: ${note.body}`);
    }else {
        console.log(`Note not found with title : ${title}`);
    }
}else if( command === 'list') {
    const allNotes = notes.getAll();
    allNotes.forEach(note => console.log(`Title: ${note.title}, Body:${note.body}`));
}else {
    console.log(`Unkown command : ${command}`);  
}