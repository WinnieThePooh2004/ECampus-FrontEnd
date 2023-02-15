import { Component } from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Department} from "../../../Models/Department";
import {DepartmentParameters} from "../../../QueryParameters/DepartmentParameters";
import {DepartmentsRequests} from "../../../Requests/DepartmentsRequests";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent extends DataTableBase<Department, DepartmentParameters>{
  displayedColumns = ['position', 'name', 'actions'];
  public constructor(requests: DepartmentsRequests, private route: ActivatedRoute) {
    super(requests);
    this.parameters = new DepartmentParameters();
    this.parameters.facultyId = Number(this.route.snapshot.paramMap.get('facultyId'));
  }

  public nameChanged(name: string) {
    this.parameters.name = name;
    this.refreshData();
  }

  createNew() {
    this.editModel = new Department();
    this.editModel.facultyId = this.parameters.facultyId;
  }
}
