const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http , {
    cors:{
        origin: true,
        credentials: true,
        methods: ['GET', 'POST']
    }
});


io.on('connection', (socket)=>{
    socket.on('sendMessage', (messageInfo)=>{
        socket.broadcast.emit('reveiceMessage', messageInfo);
    })
});


app.get('/', (req, res)=>{
    res.send('Hola mundo');
});


http.listen(3000, () => {
    console.log("Servidor ejecutandose en el puerto 3000 ");
});


