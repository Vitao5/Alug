import { lastValueFrom } from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/services/card';
import { News } from './news';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  @Input() card!: Card[]
  @Input() news: any

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.getCard();
  }

  async getCard() {
    const data$ = await lastValueFrom(this.cardService.getCard());
    // this.card = data$


    this.news = {
      firstNew: data$.slice(-1)[0],
      secondNew: data$.slice(-2)[0],
      lastNew: data$.slice(-3)[0]
    }


  }

}
