import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Session} from '../models/session';
import {JwtHelper} from 'angular2-jwt';


@Injectable()
export class AuthService {

  constructor() {
  }

  login(credentials: any): Observable<boolean> {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZ3VsYXJAbWFraW5nc2Vuc2UuY29tIiwicm9sZSI6ImFkbWluIn0.xQ-1FBaYoIeiSpDChQg9ydJRBjvbGmuAUTw1VRIqzpE');
    return Observable.of(true);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('token');
    return Observable.of(true);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getSession(): Session {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    return Session.fromJson(jwtHelper.decodeToken(token));
  }

  isAdmin(): boolean {
    const session = this.getSession();
    return session.role === 'admin';
  }
}
