import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EServicePage } from './e-service.page';

const routes: Routes = [
  {
    path: '',
    component: EServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EServicePageRoutingModule {}
