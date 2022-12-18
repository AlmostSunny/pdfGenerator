import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetUserInfoPageRoutingModule } from './get-user-info-routing.module';

import { GetUserInfoPage } from './get-user-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetUserInfoPageRoutingModule
  ],
  declarations: [GetUserInfoPage]
})
export class GetUserInfoPageModule {}
