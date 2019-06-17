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

  executeButton(commend) {
    this.clickEvent.emit(commend);
  }

  ngOnInit() {}
}
