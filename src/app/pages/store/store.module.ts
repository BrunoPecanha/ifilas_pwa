import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreDesktopComponent } from 'src/app/features/store/desktop/store-desktop.component';
import { AttendantCardMobileComponent } from 'src/app/features/store/mobile/attendant-card-mobile/attendant-card-mobile.component';
import { StoreMobileComponent } from 'src/app/features/store/mobile/store-mobile.component';

@NgModule({
  declarations: [
    StorePage,
    StoreMobileComponent,
    StoreDesktopComponent,
    AttendantCardMobileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }