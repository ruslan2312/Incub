const http = require('http');
const fs = require('fs');

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
}

const readF = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })

}


const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/home': {
            try {
                const data = await readF('Pages/about.html')
                res.write(data)
                res.end()

            } catch (err) {
                res.write('Eroor');
                res.end();
            }

            break;

        }
        case '/about': {
            await delay(3000);
            res.write('About3000');
            res.end();
            break;
        }
        default : {
            res.write('NotFounded404');
        }
    }
})

server.listen(3003);
