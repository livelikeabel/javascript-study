import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.scss"]
})
export class StopwatchComponent implements OnInit {
  present: string = "welcome";
  commandText;

  constructor() {}

  startTime($event) {
    console.log("hihi");
    this.present = $event;
  }

  ngOnInit() {}
}
