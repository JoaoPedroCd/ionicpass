import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedalPage } from './pedal.page';

const routes: Routes = [
  {
    path: '',
    component: PedalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedalPageRoutingModule {}
