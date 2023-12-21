import { Injectable } from '@angular/core';
import { FetcherMessageService } from './fetcher-message.service';
import { Message } from '../Models/Message.model';
import { MessagePost } from '../Models/MessagePost.model';
import { CanalsService } from './canals.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private http: FetcherMessageService, private canalService: CanalsService) {
    this.getMessage();
  }

  listMessage: Message[] = [
  ];

  listeFilterMessage: Message[] = [];

  getMessage() {
    this.http.get().subscribe((data) => {
      this.listMessage = data;
      this.listeFilterMessage = data;
    });
  }

  getMessageList() {
    return this.http.get();
  }

  postMessage(newMessage: MessagePost) {
    return this.http.post(newMessage).subscribe(() => {
      this.getMessage();
      // Réactualisation de la liste des messages du canal
      this.canalService.getCanalById(newMessage.idCanal).subscribe((canal) => {
        this.canalService.getMessageByCanal(canal);
      });
    })
  }
}
