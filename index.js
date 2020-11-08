const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const options = {
    root: path.join(__dirname, 'public')
}

app.get('/', (req, res) => {
    res.sendFile('index.html', options)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
