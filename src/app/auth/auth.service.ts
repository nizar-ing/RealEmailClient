import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string
}
interface SignInOrSignUpResponse {
  username: string
}

interface SignedInResponse {
  authenticated: true,
  username: string
}

interface SigninCredentials{
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointUrl: string = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<{available: boolean}>(`${this.endpointUrl}/auth/username`,{
      username
  });
  }

  signup(credentials: SignupCredentials){
    return this.http.post<SignInOrSignUpResponse>(
      `${this.endpointUrl}/auth/signup`, credentials
    ).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  checkAuth(){
    return this.http.get<SignedInResponse>(`${this.endpointUrl}/auth/signedin`)
    .pipe(
      tap(({authenticated}) => {
        this.signedin$.next(authenticated);
      })
    );
  }

  signin(credentials: SigninCredentials){
    return this.http.post(
      `${this.endpointUrl}/auth/signin`, credentials
    ).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  signout(){
    return this.http.post<SignedInResponse>(`${this.endpointUrl}/auth/signout`, {})
    .pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

}
