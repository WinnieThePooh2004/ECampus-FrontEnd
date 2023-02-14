import {Component} from '@angular/core';
import {Auditory} from "../../../../Models/Auditory";
import {EditFormBase} from "../EditFormBase";
import {Requests} from "../../../../Requests/Requests";

@Component({
  selector: 'app-auditory-edit-form',
  templateUrl: './auditory-edit-form.component.html',
  styleUrls: ['./auditory-edit-form.component.css']
})

export class AuditoryEditFormComponent extends EditFormBase<Auditory>{
  public constructor(requests: Requests<Auditory>) {
    super(requests);
    this.model = new Auditory();
  }
}
