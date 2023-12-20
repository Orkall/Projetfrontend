import { Injectable } from '@angular/core';
import { FetcherCanalsService } from './fetcher-canals.service';
import { Canal } from '../Models/Canal.model';
import { CanalPost } from '../Models/CanalPost.model';
import { MessageGet } from '../Models/MessageGet.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanalsService {

  constructor(private http: FetcherCanalsService) {
    this.getCanal();
  }
  // Canal à récupérer
  canal: Canal = {
    id: 0,
    estLeGeneral: false,
    estActif: false,
    nomCanal: '',
    listContenuMessage: []
  }

  listCanals: Canal[] = [];

  listeFilterCanals: Canal[] = [];

  listeFilterMessage: MessageGet[] = [
  ];
  getCanal() {
    this.http.get().subscribe((data) => {
      this.listCanals = data;
      this.listeFilterCanals = data;
      this.listeFilterMessage = this.canal.listContenuMessage;
    });
  }

  getCanalList() {
    return this.http.get();
  }

  getCanalById(id: number) {
    return this.http.getById(id);
  }
  postCanal(newCanal: CanalPost) {
    return this.http.post(newCanal).subscribe(() => {
      this.getCanal();
    });
  }

  // Supprimer un canal
  deleteCanal(id: number) {
    return this.http.delete(id).subscribe(() => {
      this.getCanal();
    });
  }
  getMessageByCanal(canal: Canal) {
    // Faire le filtrer qui affiche les message par canal
    this.listeFilterMessage = canal.listContenuMessage;
    this.canal = canal;
  }
}
