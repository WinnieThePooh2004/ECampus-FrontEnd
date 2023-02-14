import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {AuditoryEditFormComponent} from './Components/EditForms/auditory-edit-form/auditory-edit-form.component';
import {MatInputModule} from "@angular/material/input";
import {AuditoriesComponent} from './Pages/auditories/auditories.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HttpClientModule} from "@angular/common/http";
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
import {UserRoleEditFormComponent} from './Components/EditForms/user-role-edit-form/user-role-edit-form.component';
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
    UserRoleEditFormComponent,
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
      {path: 'faculties', component: FacultiesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}