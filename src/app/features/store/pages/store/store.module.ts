import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { StoreDesktopComponent } from '../../components/store-desktop/store-desktop.component';
import { StoreMobileComponent } from '../../components/store-mobile/store-mobile.component';

@NgModule({
  declarations: [
    StorePage,
    StoreMobileComponent,
    StoreDesktopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule
  ]
})
export class StoreModule { }
