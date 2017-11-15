import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from '../shared/services/login.guard.service';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
