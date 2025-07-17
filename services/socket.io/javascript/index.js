import { Server } from "socket.io";
import {verifyToken} from "../../middlewares/auth.middleware.js";
import { AppError } from "../../utils/error.js";

/** for using this service do this in the main file 
 * import this service
 * const socketService=new SocketService();
 * socketService.io.attach(server,{cors:{
 *    allowedHeaders:["*"],
 *    origin:"*"
 * }});
 * 
 * socketService.auth(); // for adding auth middleware for socket.io
 * socketService.initListeners(); // initialize all listeners
*/
const connectionsSocToUser=new Map();
const connectionsUserToSoc=new Map();

class SocketService{
    _io;
    constructor(){
        console.log("Init Socket Server...");
        this._io=new Server();
    }
    get io(){
        return this._io;
    }

    auth(){
        const io=this._io;
        io.use(async(socket,next)=>{
            try {
                const token=socket.handshake.headers.authorization.split(" ")[1];
                const isVerified=await verifyToken(token);
                if(!isVerified) throw new AppError("Unauthorised",401);
                socket.userId=isVerified.userId;
                next();
            } catch (error) {
               next(new AppError("Unauthorised",401)); 
            }
        })
    }
    initListeners(){
        const io=this._io;
        io.on("connect",async(socket)=>{
            const userId=socket.userId;
            connectionsSocToUser.set(socket.id,socket.userId);
            connectionsUserToSoc.set(userId,socket.id);

            socket.on("event:message",async(message)=>{
                io.to(socket.id).emit("event:message",message);
            })

            socket.on("disconnect",()=>{
                connectionsUserToSoc.delete(connectionsSocToUser.get(socket.id));
                connectionsSocToUser.delete(socket.id);
            })
        });
    }
}

export default SocketService;