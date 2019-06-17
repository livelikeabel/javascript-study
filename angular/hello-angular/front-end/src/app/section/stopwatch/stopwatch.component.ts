import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.scss"]
})
export class StopwatchComponent implements OnInit {
  present: string = "welcome";
  commandText;

  constructor(private router: Router) {}

  goClock() {
    this.router.navigateByUrl("/clock");
  }

  startTime($event) {
    console.log("hihi");
    this.present = $event;
  }

  ngOnInit() {}
}
