import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedalPageRoutingModule } from './pedal-routing.module';

import { PedalPage } from './pedal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedalPageRoutingModule
  ],
  declarations: [PedalPage]
})
export class PedalPageModule {}
