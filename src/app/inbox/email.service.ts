import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailSummary{
  id: string,
  subject: string,
  from: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  endpointUrl: string = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails(){
    return this.http.get<EmailSummary[]>(`${this.endpointUrl}/emails`);
  }

}
