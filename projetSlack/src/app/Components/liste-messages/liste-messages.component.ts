import { Component, OnInit } from '@angular/core';
import { CanalsService } from '../../Services/canals.service';
import { CommonModule } from '@angular/common';
import { MessageGet } from '../../Models/MessageGet.model';
import { AddMessageComponent } from '../add-message/add-message.component';

@Component({
  selector: 'app-liste-messages',
  standalone: true,
  imports: [CommonModule, AddMessageComponent],
  templateUrl: './liste-messages.component.html',
  styleUrl: './liste-messages.component.css'
})
export class ListeMessagesComponent implements OnInit {

  listeFilterMessage: MessageGet[] = [
  ];

  constructor(public canalService: CanalsService) { }
  ngOnInit(): void {
    if(this.listeFilterMessage.length === 0){
      this.canalService.getCanalById(1).subscribe((canal) => {
        console.log(canal.listContenuMessage);
        this.canalService.getMessageByCanal(canal);
      });
    }
  }

}
