import { Component } from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Teacher} from "../../../Models/Teacher";
import {TeacherParameters} from "../../../QueryParameters/TeacherParameters";
import {TeachersRequests} from "../../../Requests/TeachersRequests";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent extends DataTableBase<Teacher, TeacherParameters>{
  public displayedColumns = ['position', 'lastName', 'firstName', 'email', 'actions'];
  public constructor(requests: TeachersRequests, route: ActivatedRoute) {
    super(requests);
    this.parameters = new TeacherParameters();
    this.parameters.departmentId = Number(route.snapshot.paramMap.get('departmentId'));
  }

  public createNew() {
    let model = new Teacher();
    model.departmentId = this.parameters.departmentId;
    this.create(model);
  }

  public firstNameChanged(firstName: string){
    this.parameters.firstName = firstName;
    this.refreshData();
  }

  public lastNameChanged(lastName: string){
    this.parameters.lastName = lastName;
  }
}
