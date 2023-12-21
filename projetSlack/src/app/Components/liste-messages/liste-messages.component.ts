import { Component, OnInit } from '@angular/core';
import { CanalsService } from '../../Services/canals.service';
import { CommonModule } from '@angular/common';
import { MessageGet } from '../../Models/MessageGet.model';
import { AddMessageComponent } from '../add-message/add-message.component';
import { MessageService } from '../../Services/message.service';
import { Message } from '../../Models/Message.model';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-messages',
  standalone: true,
  imports: [CommonModule, AddMessageComponent, FormsModule],
  templateUrl: './liste-messages.component.html',
  styleUrl: './liste-messages.component.css'
})
export class ListeMessagesComponent implements OnInit {

  listeFilterMessage: MessageGet[] = [
  ];

  messageToUpdate: Message = {
    id: 0,
    contenuMessage: '',
    dateMessage: '',
    heureMessage: '',
    idUtilisateur: 0,
    idCanal: 0
  }

  constructor(public canalService: CanalsService, public messageService: MessageService, public userService: UserService) { }

  // A la connexion affichage liste messages du canal 1
  ngOnInit(): void {
    if (this.listeFilterMessage.length === 0) {
      this.canalService.getCanalById(1).subscribe((canal) => {
        // console.log(canal.listContenuMessage);
        this.canalService.getMessageByCanal(canal);
      });
    }
  }
  // Gérer l'affichage au clique sur le bouton modifier
  // Affichage du input contenu du message à modifier à la vue (verif ce fait sur l'id du messageToUpdate)
  patchMessage(message: MessageGet) {
    this.userService.getUserList().subscribe((users: User[]) => {

      const existingUser = users.find(u => u.pseudo === message.pseudoUtilisateur);

      if (existingUser) {
        this.messageToUpdate.idUtilisateur = existingUser.id;
      }
      this.messageToUpdate.id = message.id;
      this.messageToUpdate.contenuMessage = message.contenuMessage
      console.log(this.messageToUpdate);
    });
  }
  // Effectuer la mise à jour du message
  updateMessage() {
    this.messageService.patchMessage(this.messageToUpdate);
    // Une fois le message missé à jour, on vide le message à modifier
    this.messageToUpdate = {
      id: 0,
      contenuMessage: '',
      dateMessage: '',
      heureMessage: '',
      idUtilisateur: 0,
      idCanal: 0
    };
  }
  // Supprimer un message
  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(() => {
      let canal = this.canalService.canal;
      this.canalService.getMessageByCanal(canal);
    });
  }
  // Annuler la mise à jour du message
  annulerUpdateMessage(){
    this.messageToUpdate = {
      id: 0,
      contenuMessage: '',
      dateMessage: '',
      heureMessage: '',
      idUtilisateur: 0,
      idCanal: 0
    };
  }
}
