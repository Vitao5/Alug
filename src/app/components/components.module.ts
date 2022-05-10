import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CardComponent,
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    CardComponent
  ],
})
export class ComponentsModule { }
