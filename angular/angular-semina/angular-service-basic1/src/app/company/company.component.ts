import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private logService: LogService) {
    this.logService.info('company');
  }

  ngOnInit() {
  }
}
