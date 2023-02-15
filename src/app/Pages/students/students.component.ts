import {Component} from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Student} from "../../../Models/Student";
import {StudentParameters} from "../../../QueryParameters/StudentParameters";
import {StudentsRequests} from "../../../Requests/StudentsRequests";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent extends DataTableBase<Student, StudentParameters> {
  displayedColumns = ['position', 'lastName', 'firstName', 'email', 'actions'];

  public constructor(requests: StudentsRequests, route: ActivatedRoute) {
    super(requests);
    this.parameters = new StudentParameters();
    this.parameters.groupId = Number(route.snapshot.paramMap.get('groupId'));
  }

  public createNew() {
    let model = new Student();
    model.groupId = this.parameters.groupId;
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
