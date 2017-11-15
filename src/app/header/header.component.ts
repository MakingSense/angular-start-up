import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {Session} from "../shared/models/session";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  session: Session;

  constructor(public authService: AuthService, private router: Router) {
    this.session = this.authService.getSession();
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      setTimeout(()=>{
        this.router.navigate(['/auth/login']);
      });
    })
  }

}
