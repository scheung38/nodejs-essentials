const net = require('net');

const server = net.createServer();
const connectedClients = [];
server.listen({
    host: 'localhost',
    port: 8080,
});

server.on('connection', (client) => {
    console.log('Client connected');
    client.write('Welcome to the server');
    connectedClients.push(client);

})

setInterval(() => {
    const now = new Date().toISOString();
    connectedClients.forEach(client => {
        client.write(now)
    });
}, 3000);

// So on browser http://localhost:8080/
// ➜  node server.js
// Client connected or when 8_client.js is launched