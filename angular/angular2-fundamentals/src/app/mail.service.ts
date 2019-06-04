import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  message = 'You ve get mail'

  constructor() { }
}
