import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/user.service';
import { UserPost } from '../../Models/UserPost.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page-connexion.component.html',
  styleUrl: './page-connexion.component.css'
})
export class PageConnexionComponent {

  user: User = {
    id: 0,
    pseudo: ''
  };
  userPost: UserPost = {
    pseudo: ''
  };

  constructor(private userService: UserService) { }

  connexion() {
    this.userService.getUserConnexion(this.user, this.userPost);
  }
}
