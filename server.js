/* eslint-disable no-undef */
const express = require('express');
const server = express();
const path = require('path');

server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

server.listen(3000, () => {
	console.log('[SERVER]・Servidor rodando na porta 3000');
});
