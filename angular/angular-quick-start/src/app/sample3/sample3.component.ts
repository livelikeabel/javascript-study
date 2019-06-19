import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sample3",
  templateUrl: "./sample3.component.html",
  styleUrls: ["./sample3.component.scss"]
})
export class Sample3Component implements OnInit {
  @Input() test;

  constructor() {}

  ngOnInit() {}
}
