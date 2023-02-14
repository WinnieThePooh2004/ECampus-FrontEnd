import {Component} from '@angular/core';
import {Auditory} from "../../../../Models/Auditory";
import {EditFormBase} from "../EditFormBase";

@Component({
  selector: 'app-auditory-edit-form',
  templateUrl: './auditory-edit-form.component.html',
  styleUrls: ['./auditory-edit-form.component.css']
})

export class AuditoryEditFormComponent extends EditFormBase<Auditory>{
  public constructor() {
    super();
    this.model = new Auditory();
  }
}
