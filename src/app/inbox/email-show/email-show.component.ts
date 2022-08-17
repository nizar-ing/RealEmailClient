import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { switchMap } from 'rxjs';
import { Email } from '../email';
//import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email: Email;

  constructor(private route: ActivatedRoute) { 
    this.email = route.snapshot.data['email'];
    this.route.data.subscribe(({ email }) => this.email = email);
  }

  ngOnInit(): void {
      // this.route.params.subscribe(({id}) => {
      //   this.emailService.getEmail(id).subscribe((email) => console.log(email));
      // })
    // const {id} = this.route.snapshot.params;
    // console.log(id);

    // this.route.params.pipe(
    //   switchMap(({id}) => {
    //     return this.emailService.getEmail(id);
    //   })
    // ).subscribe((email) => this.email = email);
  }

}
