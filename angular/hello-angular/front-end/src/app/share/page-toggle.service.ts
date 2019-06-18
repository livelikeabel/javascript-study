import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class PageToggleService {
  routingCount = 0;

  constructor(private router: Router) {}

  goPage(target) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
