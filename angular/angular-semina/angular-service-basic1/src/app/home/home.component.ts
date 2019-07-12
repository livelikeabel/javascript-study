import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject('log') private logService,
    @Inject('apiUrl') private apiUrl
    ) {
    this.logService.info('home' + this.apiUrl);
  }

  ngOnInit() {
  }

}
