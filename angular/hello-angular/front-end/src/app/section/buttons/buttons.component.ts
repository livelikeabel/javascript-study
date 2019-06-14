import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
  count: number = 0;
  clear;

  @Output() clickEvent = new EventEmitter<string>();

  constructor() {}

  onStartCount($event: MouseEvent) {
    // this.count++;
    // this.clear = setInterval(() => this.count++, 1000);
    // this.clickEvent.emit(10);
    this.clickEvent.emit("change!!");
  }

  onStopCount($event: MouseEvent) {
    clearInterval(this.clear);
  }

  ngOnInit() {}
}
