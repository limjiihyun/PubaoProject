const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const http = require("http")
const server = http.createServer(app)
const socketIO = require("socket.io")

const io = socketIO(server)

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const router = require("./routes/indexRouter");
// app.use("/", router);

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});

const socket = new WebSocket.Server({
  port: 8080,
});
// 클라이언트 메세지 받으려면
io.on('connection',(socket)=>{
  socket.on('chatting',(data)=>{
    //서버가 클라이언트에게 보낼려면
    io.emit("chatting",`그래반가워 ${data}`)
  })
})