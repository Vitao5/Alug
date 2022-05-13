import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isCollapsed = false;

  mobile: boolean = false;

  constructor() { }

  ngOnInit() {
    if(window.screen.width >= 1023) {
      this.mobile = true;
    }
  }

}
