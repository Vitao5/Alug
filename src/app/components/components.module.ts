import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports:[
    ToolbarComponent
  ],
})
export class ComponentsModule { }
