import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private username: FormControl = new FormControl(null);
  private targetUser: FormControl = new FormControl(null);

  getUsername() {
    return this.username.value;
  }

  getTargetUser() {
    return this.targetUser.value;
  }
}
