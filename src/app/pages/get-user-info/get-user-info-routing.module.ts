import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetUserInfoPage } from './get-user-info.page';

const routes: Routes = [
  {
    path: '',
    component: GetUserInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetUserInfoPageRoutingModule {}
