import {AfterViewInit, Component, ViewChild} from '@angular/core';
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
import {SubjectsRequests} from "../../../../Requests/SubjectsRequests";
import {TeachersRequests} from "../../../../Requests/TeachersRequests";
import {GroupRequests} from "../../../../Requests/GroupRequests";
import {MatPaginator} from "@angular/material/paginator";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MY_FORMATS} from "../../../DateFormat";
import {DatePipe} from "@angular/common";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {QueryParameters} from "../../../../QueryParameters/QueryParameters";

@Component({
  selector: 'app-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    DatePipe
  ]
})
export class CourseEditFormComponent extends EditFormBase<Course> implements AfterViewInit {
  public readonly pageSizeOptions = QueryParameters.pageSizeOptions;
  public readonly teachersColumns = ['position', 'lastName', 'firstName', 'email', 'select'];
  public readonly groupAndSubjectColumns = ['position', 'name', 'select'];

  @ViewChild('groupsPaginator') public groupPaginator!: MatPaginator;
  @ViewChild('subjectsPaginator') public subjectsPaginator!: MatPaginator;
  @ViewChild('teachersPaginator') public teachersPaginator!: MatPaginator;
  public readonly subjectSelect: SingleSelectBase<Subject, SubjectParameters>;
  public readonly teachersSelect: MultipleSelectBase<Teacher, TeacherParameters>;
  public readonly groupsSelect: MultipleSelectBase<Group, GroupParameters>
  public constructor(subjectRequests: SubjectsRequests, teacherRequests: TeachersRequests,
                     groupRequests: GroupRequests) {
    super();
    this.teachersSelect = new MultipleSelectBase<Teacher, TeacherParameters>(teacherRequests);
    this.subjectSelect = new SingleSelectBase<Subject, SubjectParameters>(subjectRequests);
    this.groupsSelect = new MultipleSelectBase<Group, GroupParameters>(groupRequests);
    this.subjectSelect.onChanged.subscribe(id => this.model.subjectId = id);
    this.teachersSelect.parameters = new TeacherParameters();
    this.subjectSelect.parameters = new SubjectParameters();
    this.groupsSelect.parameters = new GroupParameters();
  }

  ngAfterViewInit(): void {
    this.subjectSelect.paginator = this.subjectsPaginator;
    this.teachersSelect.paginator = this.teachersPaginator;
    this.groupsSelect.paginator = this.groupPaginator;
    this.groupsSelect.selected = this.model.groups!;
    this.teachersSelect.selected = this.model.teachers!;
    this.subjectSelect.selected = this.model.subjectId;

    this.subjectSelect.refreshData();
    this.teachersSelect.refreshData();
    this.groupsSelect.refreshData();
  }

  public subjectNameChanged(name: string) {
    this.subjectSelect.parameters.name = name;
    this.subjectSelect.refreshData();
  }

  public teacherFirstNameChanged(name: string) {
    this.teachersSelect.parameters.firstName = name;
    this.teachersSelect.refreshData();
  }

  public teacherLastNameChanged(name: string) {
    this.teachersSelect.parameters.lastName = name;
    this.teachersSelect.refreshData();
  }

  public groupNameChanged(name: string) {
    this.groupsSelect.parameters.name = name;
    this.groupsSelect.refreshData();
  }

  public startDateChanged(date: Date) {
    this.model.startDate = date;
  }

  public endDateChanged(date: Date) {
    this.model.endDate = date;
  }
}
