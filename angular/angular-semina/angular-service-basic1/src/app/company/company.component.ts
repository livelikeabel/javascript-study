import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [
    LogService
  ]
})
export class CompanyComponent implements OnInit {

  constructor(private logService: LogService) {
    this.logService.info('company');
  }

  ngOnInit() {
  }
}
