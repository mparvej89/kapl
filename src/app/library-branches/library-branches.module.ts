import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryBranchesPageRoutingModule } from './library-branches-routing.module';

import { LibraryBranchesPage } from './library-branches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryBranchesPageRoutingModule
  ],
  declarations: [LibraryBranchesPage]
})
export class LibraryBranchesPageModule {}
