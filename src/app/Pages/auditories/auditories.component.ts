import {Component} from '@angular/core';
import {Auditory} from "../../../Models/Auditory";
import {AuditoryParameters} from "../../../QueryParameters/AuditoryParameters";
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Requests} from "../../../Requests/Requests";
import {ParametersRequests} from "../../../Requests/ParametersRequests";

@Component({
  selector: 'app-auditories',
  styleUrls: ['./auditories.component.css'],
  templateUrl: './auditories.component.html',
})
export class AuditoriesComponent extends DataTableBase<Auditory, AuditoryParameters>{
  displayedColumns: string[] = ['position', 'name', 'building', 'actions'];
  public constructor(requests: Requests<Auditory>, parametersRequests: ParametersRequests<Auditory, AuditoryParameters>) {
    super(requests, parametersRequests);
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
