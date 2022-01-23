import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  text = "";

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {

  }

  sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType:1
    };

    this.chatService.sendMessage(messageInfo);
    this.text = '';

  }

}
