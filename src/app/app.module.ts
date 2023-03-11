import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {AuditoryEditFormComponent} from './Components/EditForms/auditory-edit-form/auditory-edit-form.component';
import {MatInputModule} from "@angular/material/input";
import {AuditoriesComponent} from './Pages/auditories/auditories.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {DataTableBase} from "./Components/PageBases/DataTableBase";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavMenuComponent} from './Shared/nav-menu/nav-menu.component';
import {LoginBarComponent} from './Shared/login-bar/login-bar.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FacultyEditFormComponent} from './Components/EditForms/faculty-edit-form/faculty-edit-form.component';
import {RegistrationFormComponent} from './Components/EditForms/registration-form/registration-form.component';
import {ClassEditFormComponent} from './Components/EditForms/class-edit-form/class-edit-form.component';
import {CourseEditFormComponent} from './Components/EditForms/course-edit-form/course-edit-form.component';
import {
  CourseTaskEditFormComponent
} from './Components/EditForms/course-task-edit-form/course-task-edit-form.component';
import {DepartmentEditFormComponent} from './Components/EditForms/department-edit-form/department-edit-form.component';
import {GroupEditFormComponent} from './Components/EditForms/group-edit-form/group-edit-form.component';
import {PasswordChangeFormComponent} from './Components/EditForms/password-change-form/password-change-form.component';
import {StudentEditFormComponent} from './Components/EditForms/student-edit-form/student-edit-form.component';
import {SubjectEditFormComponent} from './Components/EditForms/subject-edit-form/subject-edit-form.component';
import {TeacherEditFormComponent} from './Components/EditForms/teacher-edit-form/teacher-edit-form.component';
import {UsersComponent} from './Pages/users/users.component';
import {SignUpComponent} from './Pages/sign-up/sign-up.component';
import {CoursesComponent} from './Pages/courses/courses.component';
import {CourseTasksComponent} from './Pages/course-tasks/course-tasks.component';
import {DepartmentsComponent} from './Pages/departments/departments.component';
import {FacultiesComponent} from './Pages/faculties/faculties.component';
import {GroupsComponent} from './Pages/groups/groups.component';
import {LogsComponent} from './Pages/logs/logs.component';
import {StudentsComponent} from './Pages/students/students.component';
import {SubjectsComponent} from './Pages/subjects/subjects.component';
import {TaskSubmissionsComponent} from './Pages/task-submissions/task-submissions.component';
import {TeachersComponent} from './Pages/teachers/teachers.component';
import {TimetableComponent} from './Pages/timetable/timetable.component';
import {ProfileComponent} from './Pages/profile/profile.component';
import {HomeComponent} from './Pages/home/home.component';
import {RouterModule} from "@angular/router";
import {UserEditFormComponent} from './Components/EditForms/user-edit-form/user-edit-form.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {MAT_DATE_FORMAT} from "./MatDateFormat";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";
import {EditSubmissionComponent} from './Pages/edit-submission/edit-submission.component';
import {MarkSubmissionComponent} from './Pages/mark-submission/mark-submission.component';
import {AuthInterceptor} from "../Requests/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    AuditoryEditFormComponent,
    AuditoriesComponent,
    DataTableBase,
    NavMenuComponent,
    LoginBarComponent,
    FacultyEditFormComponent,
    RegistrationFormComponent,
    ClassEditFormComponent,
    CourseEditFormComponent,
    CourseTaskEditFormComponent,
    DepartmentEditFormComponent,
    GroupEditFormComponent,
    PasswordChangeFormComponent,
    StudentEditFormComponent,
    SubjectEditFormComponent,
    TeacherEditFormComponent,
    UsersComponent,
    SignUpComponent,
    CoursesComponent,
    CourseTasksComponent,
    DepartmentsComponent,
    FacultiesComponent,
    GroupsComponent,
    LogsComponent,
    StudentsComponent,
    SubjectsComponent,
    TaskSubmissionsComponent,
    TeachersComponent,
    TimetableComponent,
    ProfileComponent,
    HomeComponent,
    UserEditFormComponent,
    EditSubmissionComponent,
    MarkSubmissionComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'auditories', component: AuditoriesComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'faculties', component: FacultiesComponent},
      {path: 'departments/:facultyId', component: DepartmentsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'groups/:departmentId', component: GroupsComponent},
      {path: 'students/:groupId', component: StudentsComponent},
      {path: 'teachers/:departmentId', component: TeachersComponent},
      {path: 'signUp', component: SignUpComponent},
      {path: 'subjects', component: SubjectsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'tasks/:courseId', component: CourseTasksComponent},
      {path: 'submissions/:courseTaskId', component: TaskSubmissionsComponent},
      {path: 'submission/edit/:courseTaskId', component: EditSubmissionComponent},
      {path: 'submission/mark/:id', component: MarkSubmissionComponent},
    ]),
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMAT},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
