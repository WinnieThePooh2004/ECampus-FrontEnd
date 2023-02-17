import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Subject} from "../../../../Models/Subject";
import {MatPaginator} from "@angular/material/paginator";
import {Teacher} from "../../../../Models/Teacher";
import {TeacherParameters} from "../../../../QueryParameters/TeacherParameters";
import {QueryParameters} from "../../../../QueryParameters/QueryParameters";
import {MultipleSelectBase} from "../../MultipleSelectBase";
import {TeachersRequests} from "../../../../Requests/TeachersRequests";

@Component({
  selector: 'app-subject-edit-form',
  templateUrl: './subject-edit-form.component.html',
  styleUrls: ['./subject-edit-form.component.css'],
})
export class SubjectEditFormComponent extends EditFormBase<Subject> implements AfterViewInit {
  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  public displayColumns = ['position', 'firstName', 'lastName', 'userEmail', 'select'];
  pageSizeOptions = QueryParameters.pageSizeOptions;
  public readonly teachersSelect: MultipleSelectBase<Teacher, TeacherParameters>;
  public constructor(requests: TeachersRequests) {
    super();
    this.teachersSelect = new MultipleSelectBase<Teacher, TeacherParameters>(requests);
    this.teachersSelect.parameters = new TeacherParameters();
  }

  ngAfterViewInit(): void {
    this.teachersSelect.paginator = this.paginator;
    this.teachersSelect.selected = this.model.teachers!;
    this.teachersSelect.refreshData();
  }

  public teacherFirstNameChanged(name: string) {
    this.teachersSelect.parameters.firstName = name;
    this.teachersSelect.refreshData();
  }

  public teacherLastNameChanged(name: string) {
    this.teachersSelect.parameters.lastName = name;
    this.teachersSelect.refreshData();
  }
}
