import { Component, Inject } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <app-simple-form></app-simple-form>

      {{ mail.message }}
      <hr />
      {{ api }}
    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Lets get started!";

  constructor(@Inject("mail") private mail, @Inject("api") private api) {}
}
