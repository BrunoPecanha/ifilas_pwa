import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServicePage } from './service.page';
import { ServicePageRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [
    ServicePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePageRoutingModule
  ]
})
export class StoreModule { }