const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/cu.wchusbserial1430')

const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
    res.sendFile('index.html', { root: __dirname });
})

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

parser.on('data', function(data){
    io.emit('dadosArduino', {
        valor: data
    });
});

io.on('connection', function (socket){
    console.log('Um usuario esta concetado');
})

http.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
})