import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Teacher} from "../../../../Models/Teacher";

@Component({
  selector: 'app-teacher-edit-form',
  templateUrl: './teacher-edit-form.component.html',
  styleUrls: ['./teacher-edit-form.component.css']
})
export class TeacherEditFormComponent extends EditFormBase<Teacher>{

}
