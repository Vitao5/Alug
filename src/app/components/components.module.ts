import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    NgxSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    CarouselModule.forRoot(),
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
