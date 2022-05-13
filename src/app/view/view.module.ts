import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  exports:[
    HomeComponent,
    NotFoundComponent
  ],
})
export class ViewModule { }
