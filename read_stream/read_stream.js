
const fs = require('fs');

const readStream = fs.createReadStream('example.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('--- New Chunk ---');
  console.log(chunk);
});

// Handle end of file
readStream.on('end', () => {
  console.log('Finished reading file.');
});

// Handle errors
readStream.on('error', (err) => {
  console.error('Error:', err);
});
