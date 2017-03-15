import { Injectable } from '@angular/core';
import { FirebaseAuthState, AngularFireAuth, AuthProviders, AuthMethods} from "angularfire2";

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public $auth: AngularFireAuth) {
    this.authState = $auth.getAuth();
    $auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  getAuthenticated(): boolean {
    return this.authState !== null;
  }

  sigInWithEmailAndPassword(credentials): firebase.Promise<FirebaseAuthState> {
    return this.$auth.login(
      credentials,
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }
    )
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.$auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
  }

  signOut(): void {
    this.$auth.logout();
  }

  getUserEmail() {
    if (this.authState != null) {
      return this.authState.auth.email;
    } else {
      return null;
    }
  }

}
