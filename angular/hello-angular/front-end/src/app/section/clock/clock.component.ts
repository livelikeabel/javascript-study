import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"]
})
export class ClockComponent implements OnInit {
  timeString: string;

  constructor(private router: Router) {
    interval(1000)
      .pipe(
        map(() => {
          return moment().format("YYYY-MM-DD HH:mm:ss");
        })
      )
      .subscribe(data => {
        this.timeString = data;
      });
  }

  goStopwatch() {
    this.router.navigateByUrl("/stopwatch");
  }

  ngOnInit() {}
}
