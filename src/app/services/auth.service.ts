import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class AuthService {
  username: FormControl = new FormControl(null);
  targetUser: FormControl = new FormControl(null);
}
