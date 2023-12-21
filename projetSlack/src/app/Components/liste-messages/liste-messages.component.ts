import { Component, OnInit } from '@angular/core';
import { CanalsService } from '../../Services/canals.service';
import { CommonModule } from '@angular/common';
import { MessageGet } from '../../Models/MessageGet.model';
import { AddMessageComponent } from '../add-message/add-message.component';
import { MessageService } from '../../Services/message.service';
import { Message } from '../../Models/Message.model';
import { UserService } from '../../Services/user.service';
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
        this.canalService.getMessageByCanal(canal);
      });
    }
  }
  
  // Gérer l'affichage au clique sur le bouton modifier
  // Affichage du input contenu du message à modifier à la vue (verif ce fait sur l'id du messageToUpdate)
  patchMessage(message: MessageGet) {
      this.messageToUpdate.idUtilisateur = this.userService.user.id;
      this.messageToUpdate.id = message.id;
      this.messageToUpdate.contenuMessage = message.contenuMessage
  }

  // Effectuer la mise à jour du message
  updateMessage() {
    console.log(this.messageToUpdate);
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
  deleteMessage(message: MessageGet) {
    if(message.pseudoUtilisateur === this.userService.user.pseudo){
      this.messageService.deleteMessage(message.id).subscribe(() => {
        let canal = this.canalService.canal;
        this.canalService.getMessageByCanal(canal);
      });
    }
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
