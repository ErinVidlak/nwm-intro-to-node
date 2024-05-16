const fs = require('fs')

// Read the content of input.txt, convert it to uppercase, and write to output.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return
    }
    const upperCaseContent = data.toUpperCase()
    fs.writeFile('output.txt', upperCaseContent, (err) => {
        if (err) {
            console.error('Error writing to the file:', err)
            return
        }
        console.log('File has been written with uppercase content.')
    })
})
