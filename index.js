const fs = require('fs')
const JSONStream = require('JSONStream')
const parser = JSONStream.parse('*')
const readStream = fs.createReadStream(__dirname + '/input.json')
const idToFind = Number(process.argv.slice(2).at(0))

let text

readStream.pipe(parser).on('data', chunck => {
  if(chunck.id === idToFind) {
    text = chunck.name
    readStream.close()
  }
})

readStream.on('close', function (err) {
	console.log(text);
})

readStream.on('error', function(err) {
  console.log(err.stack)
})




