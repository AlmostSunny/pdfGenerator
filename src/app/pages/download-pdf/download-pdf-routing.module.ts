import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadPDFPage } from './download-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadPDFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadPDFPageRoutingModule {}
