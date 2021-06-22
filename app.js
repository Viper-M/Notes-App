const yargs = require('yargs')
const UTILS = require('./utils')


yargs.command({
    command: 'add',
    describe: 'add the items',
    builder: {
        title: {
            describe: 'title of added item',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of item',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
            UTILS.addnotes(argv.title , argv.body)
    },
});

yargs.command({
    command: 'remove',
    describe: 'remove the note',
    builder: {
        title: {
            describe: 'title of removed note',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        UTILS.removenotes(argv.title)
    },
});

yargs.command({
    command: 'list',
    describe: 'list note titles',
    handler: function(argv) { 
        UTILS.listnotes()
    }
});

yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        UTILS.readnotes(argv.title)
    },
});
yargs.parse()