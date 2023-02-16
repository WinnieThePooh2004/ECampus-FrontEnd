import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {User, UserRole} from "../../../../Models/User";
import {StudentParameters} from "../../../../QueryParameters/StudentParameters";
import {TeacherParameters} from "../../../../QueryParameters/TeacherParameters";
import {Student} from "../../../../Models/Student";
import {Teacher} from "../../../../Models/Teacher";
import {MatPaginator} from "@angular/material/paginator";
import {SingleSelectBase} from "../../SingleSelectBase";
import {QueryParameters} from "../../../../QueryParameters/QueryParameters";

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent extends EditFormBase<User> implements AfterViewInit {

  @ViewChild('studentPaginator') public readonly studentTablePaginator!: MatPaginator;
  @ViewChild('teacherPaginator') public readonly teacherTablePaginator!: MatPaginator;
  public displayColumns = ['position', 'lastName', 'firstName', 'select'];
  pageSizeOptions = QueryParameters.pageSizeOptions;

  public constructor(
    public readonly studentSingleSelect: SingleSelectBase<Student, StudentParameters>,
    public readonly teacherSingleSelect: SingleSelectBase<Teacher, TeacherParameters>
  ) {
    super();
    this.studentSingleSelect.parameters.userIdCanBeNull = false;
    this.teacherSingleSelect.parameters.userIdCanBeNull = false;
    this.studentSingleSelect.onChanged.subscribe(event => this.model.studentId = event);
    this.teacherSingleSelect.onChanged.subscribe(event => this.model.teacherId = event);
  }

  ngAfterViewInit(): void {
    this.studentSingleSelect.paginator = this.studentTablePaginator;
    this.teacherSingleSelect.paginator = this.teacherTablePaginator;
  }

  public override ngOnInit() {
    if (this.model.role == UserRole.Guest || this.model.role == UserRole.Admin) {
      return;
    }

    if (this.model.role == UserRole.Student) {
      this.studentSingleSelect.refreshData();
      return;
    }

    this.teacherSingleSelect.refreshData();
  }

  public isTeacher(): boolean {
    return this.model.role == UserRole.Teacher;
  }

  public isStudent(): boolean {
    return this.model.role == UserRole.Student;
  }

  public changeRole(role: UserRole) {
    this.model.role = role;
    if (role == UserRole.Guest || role == UserRole.Admin) {
      return;
    }

    if (role == UserRole.Student) {
      this.teacherSingleSelect.dataSource.data = [];
      this.studentSingleSelect.refreshData();
      return;
    }

    this.studentSingleSelect.dataSource.data = [];
    this.teacherSingleSelect.refreshData();
  }

  public studentsLastNameChanged(value: string) {
    this.studentSingleSelect.parameters.lastName = value;
    this.studentSingleSelect.refreshData();
  }

  public studentsFirstNameChanged(value: string) {
    this.studentSingleSelect.parameters.firstName = value;
    this.studentSingleSelect.refreshData();
  }

  public teachersLastNameChanged(value: string) {
    this.studentSingleSelect.parameters.lastName = value;
    this.teacherSingleSelect.refreshData();
  }

  public teachersFirstNameChanged(value: string) {
    this.studentSingleSelect.parameters.firstName = value;
    this.teacherSingleSelect.refreshData();
  }
}
