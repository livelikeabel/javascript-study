import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-quick-start";
  names = ["abel", "jake", "kim"];

  custom() {
    console.log("custom");
  }
}
