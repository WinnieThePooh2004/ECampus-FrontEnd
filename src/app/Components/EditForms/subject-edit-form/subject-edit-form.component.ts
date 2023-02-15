import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Subject} from "../../../../Models/Subject";

@Component({
  selector: 'app-subject-edit-form',
  templateUrl: './subject-edit-form.component.html',
  styleUrls: ['./subject-edit-form.component.css']
})
export class SubjectEditFormComponent extends EditFormBase<Subject>{

}
