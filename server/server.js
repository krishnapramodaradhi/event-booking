const { createServer } = require('http');

const app = require('./src/app');

const PORT = process.env.PORT || 8000;

const server = createServer(app);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));