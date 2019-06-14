import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-time-display",
  templateUrl: "./time-display.component.html",
  styleUrls: ["./time-display.component.scss"]
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: string;

  time = 1;

  constructor() {
    console.log(this.inputData);
    // setInterval(() => {
    //   this.time++;
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
