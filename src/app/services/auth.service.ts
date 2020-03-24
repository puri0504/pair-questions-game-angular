import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
  username: string;
  targetUser: string;

  constructor() {}

  setUsername(username: string) {
    this.username = username;
  }

  setTargetUser(username: string) {
    this.targetUser = username;
  }
}
