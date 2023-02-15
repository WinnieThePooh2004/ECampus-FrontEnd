import { Component } from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Group} from "../../../Models/Group";
import {GroupParameters} from "../../../QueryParameters/GroupParameters";
import {GroupRequests} from "../../../Requests/GroupRequests";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent extends DataTableBase<Group, GroupParameters>{
  displayedColumns: string[] = ['position', 'name', 'actions'];
  public constructor(requests: GroupRequests, route: ActivatedRoute) {
    super(requests);
    this.parameters = new GroupParameters();
    this.parameters.departmentId = Number(route.snapshot.paramMap.get('departmentId'));
  }

  public nameChanged(name: string){
    this.parameters.name = name;
    this.refreshData();
  }

  public createNew(){
    let model = new Group();
    model.departmentId = this.parameters.departmentId;
    this.create(model);
  }
}
