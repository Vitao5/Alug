import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    // CarouselModule.forRoot()
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CardComponent,
    FilterComponent,
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    CardComponent,
    FilterComponent
  ],
})
export class ComponentsModule { }
