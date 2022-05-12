import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  dataFilter: any = []
  model: any = {}
  value: number = 70;
  options: Options = {
    floor: 600,
    ceil: 200000
  };
  constructor(
    private formbuilder: FormBuilder,
    private storageService: StorageService,
    private cardService: CardService
  ) { }
  ngOnInit(): void {
    this.getCity()
  }

  async getCity() {
    const data$ = await lastValueFrom(this.cardService.dataFilter())
     this.dataFilter = data$ 
  }
}




