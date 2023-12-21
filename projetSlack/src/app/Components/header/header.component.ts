import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  getIdUtilisateur: number = 0;

  constructor(public data: UserService ) { }

  refreshPage(): void {
    location.reload();
  }
  clickGetIdUtilisateur(){
    this.getIdUtilisateur = this.data.user.id;
  }
  editUser(){
    this.data.patchUser(this.data.user);
    this.getIdUtilisateur = 0;
  }
  annulerUser(){
    this.getIdUtilisateur = 0;
  }
  desactiverUser(){
    this.data.deleteUser(this.data.user.id);
    location.reload();
  }
}
