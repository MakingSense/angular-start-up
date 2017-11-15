import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {AuthGuardService} from '../shared/services/auth.guard.service';
import {UserFormComponent} from './user-form/user-form.component';

export const routes: Routes = [
  {path: '', component: UsersListComponent, canActivate: [AuthGuardService]},
  {path: 'create', component: UserFormComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
