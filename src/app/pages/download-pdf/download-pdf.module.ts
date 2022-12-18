import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadPDFPageRoutingModule } from './download-pdf-routing.module';

import { DownloadPDFPage } from './download-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadPDFPageRoutingModule
  ],
  declarations: [DownloadPDFPage]
})
export class DownloadPDFPageModule {}
