import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuitarraPage } from './guitarra.page';

const routes: Routes = [
  {
    path: '',
    component: GuitarraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuitarraPageRoutingModule {}
