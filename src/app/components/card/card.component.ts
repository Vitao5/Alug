import { lastValueFrom } from 'rxjs';
import { CardService } from 'src/app/services/card.service';

import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/services/card';
import { Photo } from 'src/app/services/photo';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card[];
  @Input() cardLength!: number;
  @Input() p: number = 1;

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  async getAllCards() {
    const data$ = await lastValueFrom(this.cardService.getCard());
    this.card = data$;
    this.cardLength = data$.length;
  }
}
