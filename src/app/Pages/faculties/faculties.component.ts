import {Component} from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Faculty} from "../../../Models/Faculty";
import {FacultyParameters} from "../../../QueryParameters/FacultyParameters";
import {FacultiesRequests} from "../../../Requests/FacultiesRequests";
import {Router} from "@angular/router";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent extends DataTableBase<Faculty, FacultyParameters>{
  displayedColumns = ['position', 'name', 'actions'];
  public constructor(requests: FacultiesRequests, private router: Router) {
    super(requests);
    this.parameters = new FacultyParameters();
  }

  public createNew(){
    this.create(new Faculty());
  }

  nameChanged(name: string) {
    this.parameters.name = name;
    this.refreshData();
  }
}
