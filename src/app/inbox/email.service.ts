import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

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

  getEmail(id: string){
    return this.http.get<Email>(`${this.endpointUrl}/emails/${id}`);
  }

  sendEmail(email: Email){
    return this.http.post(`${this.endpointUrl}/emails`, email);
  }

}
