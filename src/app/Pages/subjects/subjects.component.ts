import {Component} from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Subject} from "../../../Models/Subject";
import {SubjectParameters} from "../../../QueryParameters/SubjectParameters";
import {SubjectsRequests} from "../../../Requests/SubjectsRequests";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent extends DataTableBase<Subject, SubjectParameters> {
  public readonly displayedColumns = ['position', 'name', 'actions'];

  public constructor(requests: SubjectsRequests) {
    super(requests);
    this.parameters = new SubjectParameters();
  }

  public override edit(id: number) {
    this.editModel = null;
    super.edit(id);
  }

  public createNew() {
    let model = new Subject();
    model.teachers = [];
    this.create(model);
  }

  nameChanged(value: string) {
    this.parameters.name = value;
    this.refreshData();
  }
}
