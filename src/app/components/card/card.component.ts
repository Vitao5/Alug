import { CardService } from 'src/app/services/card.service';

import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/services/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card[]

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getAllCards()
  }

  async getAllCards() {
    const res = await this.cardService.getCard().toPromise()
    this.card = res
  }

}
