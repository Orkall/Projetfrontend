import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../Models/Message.model';
import { MessagePost } from '../Models/MessagePost.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherMessageService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Message[]>('http://localhost:8080/messages');
  }
  
  getById(id: number) {
    return this.http.get<Message>('http://localhost:8080/messages/' + id);
  }

  post(user: MessagePost) {
    return this.http.post('http://localhost:8080/messages', user);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/messages/' + id);
  }

  update(message: Message) {
    return this.http.put('http://localhost:8080/messages/' + message.id, message);
  }
}
