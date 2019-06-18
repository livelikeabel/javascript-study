import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { StopwatchComponent } from "../section/stopwatch/stopwatch.component";

@Injectable({
  providedIn: StopwatchComponent
})
export class PageToggleService {
  routingCount = 0;

  constructor(private router: Router) {}

  plusCount() {
    this.routingCount++;
  }

  goPage(target) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
