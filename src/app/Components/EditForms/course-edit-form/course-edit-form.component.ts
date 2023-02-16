import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Course} from "../../../../Models/Course";
import {SingleSelectBase} from "../../SingleSelectBase";
import {Subject} from "../../../../Models/Subject";
import {SubjectParameters} from "../../../../QueryParameters/SubjectParameters";
import {MultipleSelectBase} from "../../MultipleSelectBase";
import {Teacher} from "../../../../Models/Teacher";
import {TeacherParameters} from "../../../../QueryParameters/TeacherParameters";
import {Group} from "../../../../Models/Group";
import {GroupParameters} from "../../../../QueryParameters/GroupParameters";

@Component({
  selector: 'app-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.css']
})
export class CourseEditFormComponent extends EditFormBase<Course>{

  public constructor(
    public readonly subjectSelect: SingleSelectBase<Subject, SubjectParameters>,
    public readonly teachersSelect: MultipleSelectBase<Teacher, TeacherParameters>,
    public readonly groupsSelect: MultipleSelectBase<Group, GroupParameters>
  ) {
    super();
  }


}
