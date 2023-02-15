import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Student} from "../../../../Models/Student";

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent extends EditFormBase<Student>{

}
