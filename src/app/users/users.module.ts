import {NgModule} from '@angular/core';
import {UsersListComponent} from './users-list/users-list.component';
import {SharedModule} from "../shared/shared.module";
import {UsersRoutingModule} from "./users-routing.module";
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [UsersListComponent, UserFormComponent]
})
export class UsersModule {
}
