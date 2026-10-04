import { WebSocketServer } from "ws";
import {prisma} from "@repo/db"
const ws = new WebSocketServer({port:8080})
ws.on("connection",async(socket)=>{
    const user = await prisma.user.create({
        data:{
            email:Math.random().toString(),
            name:"asdasdasdasd"
        }
    })
    socket.send("connected")
})