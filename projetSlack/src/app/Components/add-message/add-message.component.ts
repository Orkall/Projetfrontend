import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../Services/message.service';
import { CanalsService } from '../../Services/canals.service';
import { MessagePost } from '../../Models/MessagePost.model';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

  message: MessagePost = {
    contenuMessage: '',
    idUtilisateur: 0,
    idCanal: 1
  }

  constructor(public messageService: MessageService, public canalService: CanalsService, public userService: UserService) { }

  addMessage() {
    if (this.canalService.canal.id !== 0) {
      this.message.idCanal = this.canalService.canal.id;
    }
    this.message.idUtilisateur = this.userService.user.id;
    this.messageService.postMessage(this.message);

   

    this.message = {
      contenuMessage: '',
      idUtilisateur: 0,
      idCanal: 1
    };
  }
}
