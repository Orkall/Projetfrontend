import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageConnexionComponent } from '../page-connexion/page-connexion.component';
import { PageSlackComponent } from '../page-slack/page-slack.component';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PageConnexionComponent,PageSlackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(public userService: UserService) { }
}
