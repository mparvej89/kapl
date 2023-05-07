import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryServicesPage } from './library-services.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryServicesPageRoutingModule {}
