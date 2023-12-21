import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { ListeMessagesComponent } from '../liste-messages/liste-messages.component';
import { HeaderComponent } from '../header/header.component';
import { AddMessageComponent } from '../add-message/add-message.component';

@Component({
  selector: 'app-page-slack',
  standalone: true,
  imports: [AsideComponent, ListeMessagesComponent, HeaderComponent, AddMessageComponent],
  templateUrl: './page-slack.component.html',
  styleUrl: './page-slack.component.css'
})
export class PageSlackComponent {
}
