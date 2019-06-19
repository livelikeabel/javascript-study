import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  age: number = 23;

  next() {
    this.age++;
  }

  constructor() {}

  ngOnInit() {}
}
