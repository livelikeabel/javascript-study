import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {
  present: string = "welcome";
  commandText;

  constructor() {}

  startTime($event) {
    console.log("hihi");
    this.present = $event;
  }

  ngOnInit() {}
}
