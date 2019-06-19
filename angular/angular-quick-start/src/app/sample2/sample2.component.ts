import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sample2",
  templateUrl: "./sample2.component.html",
  styleUrls: ["./sample2.component.scss"]
})
export class Sample2Component implements OnInit {
  name = "abelko";

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.name = "jcobko";
    }, 2000);
  }

  click(event) {
    console.log(event);
    console.log("click!");
  }
}
