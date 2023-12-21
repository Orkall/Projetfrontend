import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Canal } from '../Models/Canal.model';
import { CanalPost } from '../Models/CanalPost.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherCanalsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Canal[]>('http://localhost:8080/canals');
  }
  
  getById(id: number) {
    return this.http.get<Canal>('http://localhost:8080/canals/' + id);
  }

  post(canal: CanalPost) {
    return this.http.post<CanalPost>('http://localhost:8080/canals', canal);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/canals/' + id);
  }

  update(canal: Canal) {
    return this.http.put('http://localhost:8080/messages/' + canal.id, canal);
  }
}
