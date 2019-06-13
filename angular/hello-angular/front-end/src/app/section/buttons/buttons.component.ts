import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
  count: number = 0;
  clear;

  constructor() {}

  onStartCount($event: MouseEvent) {
    this.count++;
    this.clear = setInterval(() => this.count++, 1000);
  }

  onStopCount($event: MouseEvent) {
    clearInterval(this.clear);
  }

  ngOnInit() {}
}
