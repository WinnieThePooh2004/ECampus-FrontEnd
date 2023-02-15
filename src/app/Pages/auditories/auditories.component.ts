import {Component} from '@angular/core';
import {Auditory} from "../../../Models/Auditory";
import {AuditoryParameters} from "../../../QueryParameters/AuditoryParameters";
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {AuditoriesRequests} from "../../../Requests/AuditoriesRequests";

@Component({
  selector: 'app-auditories',
  styleUrls: ['./auditories.component.css'],
  templateUrl: './auditories.component.html',
})
export class AuditoriesComponent extends DataTableBase<Auditory, AuditoryParameters>{
  displayedColumns: string[] = ['position', 'name', 'building', 'actions'];
  public constructor(requests : AuditoriesRequests) {
    super(requests);
    this.parameters = new AuditoryParameters();
  }

  public createNew() {
    this.create(new Auditory());
  }

  public nameChanged(name: string){
    this.parameters.name = name;
    this.refreshData();
  }

  public buildingChanged(building: string){
    this.parameters.building = building;
    this.refreshData();
  }
}
