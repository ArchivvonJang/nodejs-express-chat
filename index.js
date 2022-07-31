require('dotenv').config();
const {MONGODB_URI} = process.env;
const mongoose = new require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

mongoose.connect(MONGODB_URI)
.then(() => { console.log('MongoDB Connected successfully') })
.catch(err => console.log(err));

let UserSchema = new mongoose.Schema({
  userid : String,
  password : String
});

let Users = mongoose.model('Users', UserSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit : '1gb', extended : false}));
app.use(express.static(__dirname + '/src'));

let userId = '';

app.get('/', (req, res) => {
  console.log(__dirname)
  // res.sendFile(__dirname + '/src/views/index.html');
  res.sendFile(__dirname + '/src/views/login.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/src/views/signup.html');
});

app.post('/signup', (req, res) => {
  const user = new Users(req.body);
  console.log(req.body)
  user.save((err) => {
    if(err) return res.status(500).json({message : "저장 실패"});
    else return res.status(200).json({message : "저장 성공", data : user});
  })
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnection', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg, id) => {
      userId = id;
      console.log('message: ' + msg + ', ' + id);
      io.emit('chat message', msg, id);
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});