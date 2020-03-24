import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
  // styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username: string;
  targetUser: string;

  constructor(private authService: AuthService) {
    this.username = authService.username;
    this.targetUser = authService.targetUser;
  }
}
