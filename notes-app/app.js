console.log("Starting the app...");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const command = yargs.argv._[0];
const argv = yargs.argv;


if( command === 'add'){
  const note =  notes.addNote(yargs.argv.title, yargs.argv.body);
  if(note){
      console.log('====================================');
      console.log("Note added with below details");
      console.log(`Title : ${note.title}, Body: ${note.body}`);
      console.log('====================================');
  }else{
      console.log(`Note title is already taken`);
  }
} else if(command == "remove"){
   const result = notes.removeNote(argv.title);
   if(result === 1){
    console.log('Removed the note with title:', title);
   }else{
      console.log(`Note ${title} not found.`);
   }
} else if( command === 'list') {
    const allNotes = notes.getAll();
    allNotes.forEach(note => console.log(`Title: ${note.title}, Body:${note.body}`));
}else {
    console.log('Unkown command : $command');  
}