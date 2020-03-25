import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class AuthService {
  username: FormControl = new FormControl('alexey');
  targetUser: FormControl = new FormControl('ksenia');
}
