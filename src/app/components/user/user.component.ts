import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
  // styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username: FormControl;
  targetUser: FormControl;

  constructor(private authService: AuthService) {
    this.username = authService.getUsername();
    this.targetUser = authService.getTargetUser();
  }
}
