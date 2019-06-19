import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  @Input() name;
  @Input() age;

  @Output() next = new EventEmitter();

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.next.emit();
    }, 2000);
  }

  click(text, event) {
    console.log(text);
    console.log(event);
  }
}
