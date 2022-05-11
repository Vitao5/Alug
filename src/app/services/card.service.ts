import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Card } from './card';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  public addCard(newCard: Card) {
    return this.httpClient.post<Card>(`${API}/property`, newCard)
      .pipe(map((res: any) => { return res; }));
  }

  public getCard() {
    return this.httpClient.get<Card>(`${API}/property`)
      .pipe(map((res: any) => { return res; }));
  }
  public getPhoto(id:number) {
    return this.httpClient.get(`${API}/photos?owner=${id}`)
      .pipe(map((res: any) => { return res; }));
  }


}
