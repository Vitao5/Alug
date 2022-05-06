import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  exports:[
    ToolbarComponent,
    FooterComponent
  ],
})
export class ComponentsModule { }
