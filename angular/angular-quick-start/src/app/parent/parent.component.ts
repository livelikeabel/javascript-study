import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  @Input() age: number;
  @Output() upAge = new EventEmitter();

  next() {
    this.upAge.emit();
  }

  constructor() {}

  ngOnInit() {}
}
