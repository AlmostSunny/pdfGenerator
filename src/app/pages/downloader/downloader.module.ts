import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloaderPageRoutingModule } from './downloader-routing.module';

import { DownloaderPage } from './downloader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloaderPageRoutingModule
  ],
  declarations: [DownloaderPage]
})
export class DownloaderPageModule {}
