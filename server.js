const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('Bir kullanıcı bağlandı');
    
    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı');
    });
});

http.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor`);
    console.log(`http://localhost:${port} adresinden erişebilirsiniz`);
}); 