import {Component} from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Faculty} from "../../../Models/Faculty";
import {FacultyParameters} from "../../../QueryParameters/FacultyParameters";
import {FacultiesRequests} from "../../../Requests/FacultiesRequests";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent extends DataTableBase<Faculty, FacultyParameters>{
  displayedColumns = ['No.', 'name', 'actions'];
  public constructor(requests: FacultiesRequests) {
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
