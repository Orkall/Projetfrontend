import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanalsService } from '../../Services/canals.service';
import { CanalPost } from '../../Models/CanalPost.model';

@Component({
  selector: 'app-add-canal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-canal.component.html',
  styleUrl: './add-canal.component.css'
})
export class AddCanalComponent {


  canalPost : CanalPost = {
    id: 0,
    estLeGeneral: false,
    estActif: true,
    nomCanal: '',
    listContenuMessage: []
  }

  constructor(public canalService: CanalsService) { }

  addCanal() {
    console.log("fdf");
    console.log(this.canalPost);
    this.canalService.postCanal(this.canalPost);

    // Remettre a vide pour vider le input
    this.canalPost = {
      id: 0,
      estLeGeneral: false,
      estActif: true,
      nomCanal: '',
      listContenuMessage: []
    };
  }
  
}
