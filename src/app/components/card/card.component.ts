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

  @Input() card!: Card[]
  @Input() photos!: Photo[]

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getAllCards()
    this.getAllPhotos()
  }

  async getAllCards() {
    const res = await this.cardService.getCard().toPromise()
    this.card = res
  }
  async getAllPhotos() {
    const res = await this.cardService.getCard().toPromise()

    for (let index = 0; index < res.length; index++) {
      const element = await res[index].photo

      this.photos = await element
      console.log(this.photos);

    }


  }



}
