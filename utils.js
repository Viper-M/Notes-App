const fs = require('fs')
const chalk = require('chalk')

const addnotes = function(title , body){
    const notes = loadnotes()
    const duplicatenotes = notes.filter(note => {
        return note.title === title
    });
    if(duplicatenotes.length === 0){
    notes.push({
        title: title,
        body: body,
    })
    savenotes(notes)
    console.log(chalk.green('Note Saved'))
}
else{
    console.log(chalk.red('Note Already Taken'))
}
}

const removenotes = function(title){
    const notes = loadnotes()
    const notetoremove = notes.filter(note => {
        return note.title !== title
    });
    if(notes.length > notetoremove.length){
        console.log(chalk.green('Note Removed'))
    }
    else{
        console.log(chalk.red('No Note Found'))
    }
    savenotes(notetoremove)
}

const listnotes = () => {
    const notes = loadnotes()
    console.log(chalk.yellowBright.inverse('YOUR NOTES'))
        notes.forEach( (note) => {
        console.log(note.title)
    });
}

const readnotes = (title) => {
    const notes = loadnotes()
    const note = notes.find((note) =>
            note.title === title
    )
    if(note){
        console.log(chalk.green(note.title))
        console.log(chalk.inverse.green(note.body))
    }
    else{
        console.log(chalk.red('No Note Found'))
    }
}

const savenotes = (notes) => { 
        const datajson = JSON.stringify(notes)
        fs.writeFileSync('Data.json' , datajson)
}

const loadnotes = () => {
    try{
        const databuffer = fs.readFileSync('Data.json')
        const datastring = databuffer.toString()
        return JSON.parse(datastring)
    }catch(e){
    return []
    }
}

module.exports = {
    addnotes : addnotes,
    removenotes: removenotes,
    listnotes: listnotes,
    readnotes: readnotes,
    loadnotes: loadnotes,
    savenotes: savenotes,
}
