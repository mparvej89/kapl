import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenDataPageRoutingModule } from './open-data-routing.module';

import { OpenDataPage } from './open-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenDataPageRoutingModule
  ],
  declarations: [OpenDataPage]
})
export class OpenDataPageModule {}
