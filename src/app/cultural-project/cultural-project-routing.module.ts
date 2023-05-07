import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturalProjectPage } from './cultural-project.page';

const routes: Routes = [
  {
    path: '',
    component: CulturalProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturalProjectPageRoutingModule {}
