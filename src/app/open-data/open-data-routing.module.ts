import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenDataPage } from './open-data.page';

const routes: Routes = [
  {
    path: '',
    component: OpenDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenDataPageRoutingModule {}
