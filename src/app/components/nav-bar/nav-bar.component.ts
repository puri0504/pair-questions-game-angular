import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavbarComponent {
  public user: boolean;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
