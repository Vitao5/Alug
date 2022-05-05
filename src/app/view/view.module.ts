import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports:[
    HomeComponent
  ],
})
export class ViewModule { }
