import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats = [] as any;

  constructor(
    private socketService: SocketService
  ) { 
    this.onReceiveMessage();
  }


  sendMessage(message: any ){
    this.chats.push(message);
    this.socketService.io.emit("sendMessage",  message);
  }

  onReceiveMessage(){
    this.socketService.io.on("reveiceMessage", (message)=>{
      message.messageType = 2;
      this.chats.push(message);
    });
  }

}
