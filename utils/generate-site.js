const fs = require('fs')

const writeFile = profileHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', profileHTML, err => {
            if (err) {
                reject(err);
                return
            }
            resolve({
                ok: true,
                message: 'File created successfully.'
            })
        })
    })
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css','./dist/style.css', err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File copied successfully.'
            })
        }
    )}
)};

module.exports = { writeFile, copyFile };