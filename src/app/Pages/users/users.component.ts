import { Component } from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {User, UserRole} from "../../../Models/User";
import {UserParameters} from "../../../QueryParameters/UserParameters";
import {UsersRequests} from "../../../Requests/UsersRequests";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends DataTableBase<User, UserParameters>{
  displayedColumns: string[] = ['position', 'email', 'username', 'role', 'actions'];
  public constructor(requests: UsersRequests) {
    super(requests);
    this.parameters = new UserParameters();
  }

  public emailChanged(email: string){
    this.parameters.email = email;
    this.refreshData();
  }

  public usernameChanged(username: string){
    this.parameters.username = username;
    this.refreshData();
  }

  roleName(role: UserRole): string {
    switch (role){
      case UserRole.Admin: return 'Admin';
      case UserRole.Guest: return 'Guest';
      case UserRole.Student: return 'Student';
      case UserRole.Teacher: return 'Teacher';
    }
  }

  createNew() {
    this.create(new User());
  }
}
