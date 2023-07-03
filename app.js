import { createServer } from 'http';
import { getAsteroids } from './nasa.js';

const server = createServer((req, res) => {
    if (req.url === '/asteroids') {
    const startDate = '2015-09-07';
    const endDate = '2015-09-08';
    const apiKey = 'YeakdsQT5dsgNeDXcZcZ3fVDPLyzAt7710hl8y9M';
    getAsteroids(startDate, endDate, apiKey, req, res);
    } else {
    res.statusCode = 404;
    res.end('Endpoint no encontrado');
    }
});

const config = {
    hostname: '127.9.6.213',
    port: 3000
};

server.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
