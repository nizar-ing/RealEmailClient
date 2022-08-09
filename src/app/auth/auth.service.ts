import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string
}
interface SignupResponse {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointUrl: string = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<{available: boolean}>(`${this.endpointUrl}/auth/username`,{
      username
  });
  }

  signup(credentials: SignupCredentials){
    return this.http.post<SignupResponse>(
      `${this.endpointUrl}/auth/signup`,
      credentials
    );
  }

}
