import { Component } from '@angular/core';
import { ListeCanalsComponent } from '../liste-canals/liste-canals.component';
import { AddCanalComponent } from '../add-canal/add-canal.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ListeCanalsComponent, AddCanalComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  
}
