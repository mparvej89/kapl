import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryBranchesPage } from './library-branches.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryBranchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryBranchesPageRoutingModule {}
