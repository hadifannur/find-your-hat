const prompt = require('prompt-sync')({sigint: true});
const Field = require('./field.js');

// Create instance of a field.
const myField = new Field(Field.generateField(13,5,20));

// Process user input
const move = input => {
    input = input.toString().trim();
    myField.playerPosition = input;
    process.stdout.write('Which way? ');
}

myField.print();
process.stdout.write('Which way? ');
process.stdin.on('data', move);