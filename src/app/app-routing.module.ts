import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  // component: HomeComponent,
  // pare che questa notazione spacchi tutto in aot
  // loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  loadChildren: './pages/home/home.module#HomeModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
