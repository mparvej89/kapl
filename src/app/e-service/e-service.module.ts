import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EServicePageRoutingModule } from './e-service-routing.module';

import { EServicePage } from './e-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EServicePageRoutingModule
  ],
  declarations: [EServicePage]
})
export class EServicePageModule {}
