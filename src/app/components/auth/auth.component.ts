import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
  // styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: [''],
      targetUser: ['']
    });
  }

  setUsername() {
    console.log('setUsername', this.form.value.username);
    this.authService.setUsername(this.form.value.usernam);
  }

  setTarget() {
    console.log('setTarget', this.form.value.targetUser);
    this.authService.setTargetUser(this.form.value.targetUser);
  }
}
