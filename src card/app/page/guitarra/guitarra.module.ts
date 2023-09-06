import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuitarraPageRoutingModule } from './guitarra-routing.module';

import { GuitarraPage } from './guitarra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuitarraPageRoutingModule
  ],
  declarations: [GuitarraPage]
})
export class GuitarraPageModule {}
