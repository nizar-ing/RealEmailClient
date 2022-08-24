import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  showModel: boolean = false;
  email: Email;

  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`
    }
   }

  ngOnInit(): void {
  }

  onSubmit(email: Email){
    // send the email via our Email Service
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModel = false;
    });
  }

}
