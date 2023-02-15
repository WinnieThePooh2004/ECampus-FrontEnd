import { Component } from '@angular/core';
import {Group} from "../../../../Models/Group";
import {EditFormBase} from "../EditFormBase";

@Component({
  selector: 'app-group-edit-form',
  templateUrl: './group-edit-form.component.html',
  styleUrls: ['./group-edit-form.component.css']
})
export class GroupEditFormComponent extends EditFormBase<Group>{

}
