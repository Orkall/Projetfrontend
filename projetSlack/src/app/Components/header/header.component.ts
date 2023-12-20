import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public data: UserService) { }
}
