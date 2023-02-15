import { Component } from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Faculty} from "../../../../Models/Faculty";

@Component({
  selector: 'app-faculty-edit-form',
  templateUrl: './faculty-edit-form.component.html',
  styleUrls: ['./faculty-edit-form.component.css']
})
export class FacultyEditFormComponent extends EditFormBase<Faculty>{

}
