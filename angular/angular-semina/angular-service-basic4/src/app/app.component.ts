import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-service-basic4';
  users = [];
  isVisible = true;
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {
    this.http.get(this.apiUrl)
      .toPromise()
      .then(data => {
        console.log(data)
        this.users = data;
      })
      .catch(error => {
        this.users = [];
        console.log(error)
      })
  }

  toggle () {
    this.isVisible = !this.isVisible
  }
}
