import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grand",
  templateUrl: "./grand.component.html",
  styleUrls: ["./grand.component.scss"]
})
export class GrandComponent implements OnInit {
  age: number = 23;

  constructor() {}

  ngOnInit() {}

  up() {
    this.age++;
  }
}
