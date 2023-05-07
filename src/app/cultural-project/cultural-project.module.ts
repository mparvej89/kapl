import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturalProjectPageRoutingModule } from './cultural-project-routing.module';

import { CulturalProjectPage } from './cultural-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturalProjectPageRoutingModule
  ],
  declarations: [CulturalProjectPage]
})
export class CulturalProjectPageModule {}
