import { Component, Injectable } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html'
})

export class NavbarComponent {
  public user: boolean;

  constructor(public authService: AuthService) {
    this.authService.currentUser.subscribe(user => this.user = user);
  }
}
