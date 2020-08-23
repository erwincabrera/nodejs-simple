const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname
    let fileName = './index.html'

    if (pathName !== '/') {
        fileName = '.' + pathName
        if (!fileName.endsWith('.html')) {
            fileName += '.html'
        }
    }
    
    fs.readFile(fileName, (err, data) => {
        if (err) {
            fs.readFile('./404.html', (err, data) => {
                res.writeHead(404, {'Content-Type': 'text/html'})
                return res.end(data)
            })
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        return res.end(data)
    })
}).listen(8080)
