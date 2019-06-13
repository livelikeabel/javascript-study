import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-time-display",
  templateUrl: "./time-display.component.html",
  styleUrls: ["./time-display.component.scss"]
})
export class TimeDisplayComponent implements OnInit {
  time = 1;

  constructor() {
    setInterval(() => {
      this.time++;
    }, 1000);
  }

  ngOnInit() {}
}
