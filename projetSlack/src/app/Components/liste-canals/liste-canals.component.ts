import { Component, OnInit } from '@angular/core';
import { Canal } from '../../Models/Canal.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanalsService } from '../../Services/canals.service';

@Component({
  selector: 'app-liste-canals',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './liste-canals.component.html',
  styleUrl: './liste-canals.component.css'
})
export class ListeCanalsComponent {

  constructor(public canalService: CanalsService) { }


  clickCanal(canal: Canal) {
    this.canalService.getMessageByCanal(canal);
  }
  deleteCanal(canal: Canal) {
    console.log(canal.id)
    this.canalService.deleteCanal(canal.id);
  }
}
