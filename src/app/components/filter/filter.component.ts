import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  value: number = 70;
  options: Options = {
    floor: 600,
    ceil: 200000
  };
  constructor() { }
   ngOnInit() {
     
  }
}



