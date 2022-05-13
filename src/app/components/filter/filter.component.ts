import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  dataFilter: any = []
  filterForm: FormGroup | any
  model: any = {}
  value: number = 600;
  highValue: number = 5000;
  options: Options = {
    floor: 600,
    ceil: 5000
  };
  constructor(
    private formbuilder: FormBuilder,
    private cardService: CardService
  ) { }
  ngOnInit(): void {
    this.filterForm = this.formbuilder.group({
      tipoOpercao: [''],
      tipoPropriedade: [''],
      cidade: [''],
      quartos: [''],
      banheiros: [''],
      valor: ['']
    })
    this.getDataFilter()
  }

  async getDataFilter() {
    const data$ = await lastValueFrom(this.cardService.dataFilter())
     this.dataFilter = data$ 
  }

  filtrar(){
    console.log(this.model)
  }
}




