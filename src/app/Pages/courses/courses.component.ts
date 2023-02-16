import {Component} from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {Course} from "../../../Models/Course";
import {CourseParameters} from "../../../QueryParameters/CourseParameters";
import {CoursesRequests} from "../../../Requests/CoursesRequests";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent extends DataTableBase<Course, CourseParameters> {
  displayedColumns = ['position', 'name', 'start', 'end', 'actions'];

  public constructor(requests: CoursesRequests) {
    super(requests);
    this.parameters = new CourseParameters();
    this.parameters.groupId = Number(localStorage.getItem('groupId'));
    this.parameters.teacherId = Number(localStorage.getItem('teacherId'));
  }

  nameChanged(value: string) {
    this.parameters.name = value;
  }

  createNew() {
    this.create(new Course());
  }
}
