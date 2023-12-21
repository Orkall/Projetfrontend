import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User.model';
import { UserPost } from '../Models/UserPost.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherUserService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<User[]>('http://localhost:8080/utilisateurs');
  }
  
  getById(id: number) {
    return this.http.get<User>('http://localhost:8080/utilisateurs/' + id);
  }

  post(user: UserPost) {
    return this.http.post('http://localhost:8080/utilisateurs', user);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/utilisateurs/' + id);
  }

  patch(user: User) {
    return this.http.patch('http://localhost:8080/utilisateurs/' + user.id, user);
  }
}
