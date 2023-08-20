//SE CREA SERVIDOR DE NODE JS SIN EXPRESS

/*const http = require('http');

const server = http.createServer((req, res) => {
    res.status =  404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Mi primera pagina web');
});

server.listen(3000, function(){
    console.log('puerto libre', this.address().port);
});*/

//SE CREA SERVIDOR UTILIZANDO EXPRESS

const express = require('express');

const app = express();

//middlewares
app.use(express.json());

//Settings
app.set('port', 5000);

app.get('/', (req, res) => {
    res.json({
        username: 'Juan Camilo',
        lastname: 'Blandon Lopez',
        Age: '21'
    });
});

app.post('/post/:id', (req, res) => {
    res.send('<h1>Peticion post</h1>');
    console.log(req.body)
    console.log(req.params)
});

app.put('/put', (req, res) => {
    res.send('<h1>Peticion put</h1>');
});

app.delete('/delete/:userid', (req, res) => {
    res.send(`userio ${req.params.userid} eliminado`);
    console.log(req.body)
});

app.listen(app.get('port'), function(){
    console.log('server on port: ', app.get('port'));
});