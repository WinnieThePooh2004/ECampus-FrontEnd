import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {CourseTask} from "../../../../Models/CourseTask";

@Component({
  selector: 'app-course-task-edit-form',
  templateUrl: './course-task-edit-form.component.html',
  styleUrls: ['./course-task-edit-form.component.css'],
})
export class CourseTaskEditFormComponent extends EditFormBase<CourseTask>{
  public constructor() {
    super();
  }
}
