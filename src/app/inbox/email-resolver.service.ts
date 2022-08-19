import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Email } from './email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService, private router: Router) { }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     const { id } = route.params;
     return this.emailService.getEmail(id);
   }

  // resolve() {
  //     return {
  //       id: 'medMomen',
  //       subject: 'medMomen',
  //       from: 'medMomen',
  //       to: 'medMomen',
  //       text: 'medMomen',
  //       html: 'medMomen'
  //     }
  // }
}

