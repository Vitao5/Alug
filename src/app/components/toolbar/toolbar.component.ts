import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isCollapse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleButton() {
    this.isCollapse = !this.isCollapse;
    console.log(this.isCollapse);
    
  }
}
