import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(
    @Inject('log') private logService,
    @Inject('apiUrl') private apiUrl
  ) {
    this.logService.info('company' + this.apiUrl);
  }

  ngOnInit() {
  }
}
