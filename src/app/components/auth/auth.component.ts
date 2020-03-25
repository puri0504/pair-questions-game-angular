import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
  // styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username: FormControl;
  targetUser: FormControl;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.username;
    this.targetUser = this.authService.targetUser;
  }
}
