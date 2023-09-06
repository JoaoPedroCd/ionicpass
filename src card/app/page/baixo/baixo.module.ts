import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaixoPageRoutingModule } from './baixo-routing.module';

import { BaixoPage } from './baixo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaixoPageRoutingModule
  ],
  declarations: [BaixoPage]
})
export class BaixoPageModule {}
