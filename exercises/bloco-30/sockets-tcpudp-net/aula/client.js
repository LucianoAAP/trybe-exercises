const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin();
const hostDoRicci = '15.228.250.12';

client.connect(8080, 'localhost', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message);
  });
});

client.on('data', (data) => {
  console.log('' + data);
});

client.on('close', () => {
  console.log('Você saiu da sala');
});