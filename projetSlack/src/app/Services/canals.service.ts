import { Injectable } from '@angular/core';
import { FetcherCanalsService } from './fetcher-canals.service';
import { Canal } from '../Models/Canal.model';
import { CanalPost } from '../Models/CanalPost.model';
import { MessageGet } from '../Models/MessageGet.model';
import { parse } from 'date-fns';
import { catchError, throwError } from 'rxjs';

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

  rechercheMessage: string = '';

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
    return this.http.post(newCanal).pipe().subscribe(() => {
      this.getCanal();
    });
  }

  // Supprimer un canal
  deleteCanal(id: number) {
    return this.http.delete(id).subscribe(() => {
      this.getCanal();
    });
  }

  // Filtre de recherche par mot
  filtreRechercheMessageByCanal(termeRecherche: string) {
    this.rechercheMessage = termeRecherche;
    this.listeFilterMessage = this.listeFilterMessage.filter(message => message.contenuMessage.includes(this.rechercheMessage));
  }

  getMessageByCanal(canal: Canal) {
    this.getCanalById(canal.id).subscribe((canal) => {
      if (canal.listContenuMessage && canal.listContenuMessage.length > 0) {
        // Si la liste de messages n'est pas vide, la trier par date
        this.listeFilterMessage = canal.listContenuMessage.sort((a, b) => {
          const dateA = this.parseDateString(a.dateMessage, a.heureMessage);
          const dateB = this.parseDateString(b.dateMessage, b.heureMessage);
  
          console.log(dateA,dateB);
          // Tri du plus ancien au moins ancien
          return dateA.getTime() - dateB.getTime();
        });
      } else {
        // Si la liste de messages est vide, assigner directement la liste vide
        this.listeFilterMessage = canal.listContenuMessage;
      }
      this.canal = canal;
    });
  }
  parseDateString(date: string, heure: string): Date {
    const months: any = {
      "janvier": "January",
      "février": "February",
      "mars": "March",
      "avril": "April",
      "mai": "May",
      "juin": "June",
      "juillet": "July",
      "août": "August",
      "septembre": "September",
      "octobre": "October",
      "novembre": "November",
      "décembre": "December"
    };
  
    const dateParts = date.split(" ");
    const mois = months[dateParts[2]];
    const year = new Date().getFullYear();
  
    const dateComplete = `${mois} ${dateParts[1]}, ${year}, ${heure}`;
    return new Date(dateComplete);
  }
}
