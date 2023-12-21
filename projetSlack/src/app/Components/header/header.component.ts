import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CanalsService } from '../../Services/canals.service';
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
  constructor(public data: UserService ) { }


}
