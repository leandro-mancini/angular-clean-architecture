import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { extract } from '@app/infra/translations/i18n.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: extract('TIT_LOGIN') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule { }
