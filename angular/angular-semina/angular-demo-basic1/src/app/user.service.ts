import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Promise<any> {
    return this.http.get('https://api.github.com/users')
      .toPromise();
  }
}
