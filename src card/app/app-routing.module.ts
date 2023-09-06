import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'baixo',
    loadChildren: () => import('./page/baixo/baixo.module').then( m => m.BaixoPageModule)
  },
  {
    path: 'guitarra',
    loadChildren: () => import('./page/guitarra/guitarra.module').then( m => m.GuitarraPageModule)
  },
  {
    path: 'pedal',
    loadChildren: () => import('./page/pedal/pedal.module').then( m => m.PedalPageModule)
  },
  {
    path: 'bateria',
    loadChildren: () => import('./page/bateria/bateria.module').then( m => m.BateriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
