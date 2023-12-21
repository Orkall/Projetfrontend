import { Component, OnInit } from '@angular/core';
import { Canal } from '../../Models/Canal.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanalsService } from '../../Services/canals.service';
import { CanalUpdate } from '../../Models/CanalUpdate.model';

@Component({
  selector: 'app-liste-canals',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './liste-canals.component.html',
  styleUrl: './liste-canals.component.css'
})
export class ListeCanalsComponent {

  idCanal: number = 0;

  constructor(public canalService: CanalsService) { }

  clickCanal(canal: Canal) {
    this.canalService.getMessageByCanal(canal);
  }
  deleteCanal(canal: Canal) {
    this.canalService.deleteCanal(canal.id);
  }

  // Récupérer l'id du canal cliqué que je veux modifier et je l'affecte a la variable idCanal
  clickEditNomCanal(canal : Canal) {
    this.idCanal = canal.id;
  }
  // Met à jour la canal sélectionnée
  editCanal(canal :Canal) {
    this.canalService.patchCanal(canal);
    this.idCanal = 0;
  }
  annulerCanal(){
    this.idCanal = 0;
  }

}
