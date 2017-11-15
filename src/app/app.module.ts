import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AuthService} from './shared/services/auth.service';
import {AuthGuardService} from './shared/services/auth.guard.service';
import {LoginGuardService} from './shared/services/login.guard.service';
import {UsersService} from './shared/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    LoginGuardService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
