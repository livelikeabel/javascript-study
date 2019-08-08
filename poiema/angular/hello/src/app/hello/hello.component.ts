import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
    name: string;

    setName(name: string) {
        this.name = name;
    }
}
