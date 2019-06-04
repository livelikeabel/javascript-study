import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <app-simple-form></app-simple-form>
    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Lets get started!";
}
