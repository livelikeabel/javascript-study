import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `
    <div>
      <input #myInput type="text" />
      <button (mouseover)="onClick($event, myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  onClick(e, value) {
    console.log(e, value);
  }

  constructor() {}

  ngOnInit() {}
}
