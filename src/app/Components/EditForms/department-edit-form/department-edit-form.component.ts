import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Department} from "../../../../Models/Department";

@Component({
  selector: 'app-department-edit-form',
  templateUrl: './department-edit-form.component.html',
  styleUrls: ['./department-edit-form.component.css']
})
export class DepartmentEditFormComponent extends EditFormBase<Department>{

}
