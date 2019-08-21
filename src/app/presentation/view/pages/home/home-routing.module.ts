import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteService } from '../route.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  RouteService.withShell([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent,
      data: {
        title: 'Home'
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
