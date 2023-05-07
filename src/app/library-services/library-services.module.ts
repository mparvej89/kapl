import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryServicesPageRoutingModule } from './library-services-routing.module';

import { LibraryServicesPage } from './library-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryServicesPageRoutingModule
  ],
  declarations: [LibraryServicesPage]
})
export class LibraryServicesPageModule {}
