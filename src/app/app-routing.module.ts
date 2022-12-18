import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
    
  },
  {
    path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'get-user-info',
    loadChildren: () => import('./pages/get-user-info/get-user-info.module').then( m => m.GetUserInfoPageModule)
  },
  {
    path: 'download-pdf',
    loadChildren: () => import('./pages/download-pdf/download-pdf.module').then( m => m.DownloadPDFPageModule)
  },
  {
    path: 'downloader',
    loadChildren: () => import('./pages/downloader/downloader.module').then( m => m.DownloaderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
