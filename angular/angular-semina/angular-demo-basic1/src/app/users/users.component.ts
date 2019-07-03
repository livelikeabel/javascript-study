import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService) { }

  // async ngOnInit() {
  //   let data = null;
  //   try {
  //     data = await this.userService.getUsers();
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   if(data) this.users = data;
  // }
  ngOnInit() {
    const users$ = this.userService.getUsers$();

    users$.subscribe(data => {
      this.users = data;
    });
  }
}
