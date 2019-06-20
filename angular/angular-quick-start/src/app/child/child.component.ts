import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() name;
  @Input() age;

  @Output() next = new EventEmitter();

  constructor() {
    console.error("constructor");
  }

  ngOnChanges() {
    console.error("ngOnChanges");
  }

  ngOnInit() {
    console.error("ngOnInit");
    setInterval(() => {
      this.next.emit();
    }, 2000);
  }

  click(text, event) {
    console.log(text);
    console.log(event);
  }
}
