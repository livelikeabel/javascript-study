import { Component } from "@angular/core";
import { GreetingService } from "./greeting.service";

@Component({
  selector: "app-root",
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  greeting: string;
  greetingService: GreetingService;

  constructor() {
    // 서비스의 인스턴스를 직접 생성한다.
    this.greetingService = new GreetingService();
  }

  sayHi() {
    // 서비스의 사용
    this.greeting = this.greetingService.sayHi();
  }
}
