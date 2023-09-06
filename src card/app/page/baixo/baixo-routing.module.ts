import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaixoPage } from './baixo.page';

const routes: Routes = [
  {
    path: '',
    component: BaixoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaixoPageRoutingModule {}
