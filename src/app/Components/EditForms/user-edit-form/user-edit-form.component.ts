import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {User} from "../../../../Models/User";

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent extends EditFormBase<User>{

}
