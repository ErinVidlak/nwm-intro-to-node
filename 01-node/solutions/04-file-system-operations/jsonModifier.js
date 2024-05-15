const fs = require('fs')

// Read the content of data.json, modify it, and write to modifiedData.json
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err)
        return
    }
    let jsonData = JSON.parse(data)
    const currentDate = new Date().toISOString()
    jsonData = jsonData.map(item => ({ ...item, updatedAt: currentDate }))

    fs.writeFile('modifiedData.json', JSON.stringify(jsonData, null, 4), (err) => {
        if (err) {
            console.error('Error writing to the JSON file:', err)
            return
        }
        console.log('JSON file has been modified and written.')
    })
})
