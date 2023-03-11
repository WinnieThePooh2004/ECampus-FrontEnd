import { Component } from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {CourseTask, TaskType} from "../../../Models/CourseTask";
import {CourseTaskParameters} from "../../../QueryParameters/CourseTaskParameters";
import {CourseTasksRequests} from "../../../Requests/CourseTasksRequests";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-course-tasks',
  templateUrl: './course-tasks.component.html',
  styleUrls: ['./course-tasks.component.css']
})
export class CourseTasksComponent extends DataTableBase<CourseTask, CourseTaskParameters>{
  public displayedColumns = ['position', 'name', 'deadline', 'validAfterDeadline', 'maxPoints', 'coefficient', 'type', 'actions'];
  private datePipe = new DatePipe('en-Us');
  public isStudent: boolean;
  public constructor(requests: CourseTasksRequests,  route: ActivatedRoute) {
    super(requests);
    this.parameters = new CourseTaskParameters();
    this.parameters.courseId = Number(route.snapshot.paramMap.get('courseId'));
    this.editEnabled = this.editEnabled || localStorage.getItem('role') == 'Teacher';
    this.isStudent = localStorage.getItem('role') == 'Student';
  }

  public createNew(){
    let task = new CourseTask();
    task.courseId = this.parameters.courseId;
    this.create(task);
  }

  public showDate(date: Date): string {
    return this.datePipe.transform(date, 'dd MMM YYYY')!;
  }

  public taskTypeToString(type: TaskType): string{
    switch (type){
      case TaskType.Classwork: return 'Classwork';
      case TaskType.Exam: return 'Exam';
      case TaskType.Homework: return 'Homework';
      case TaskType.Test: return 'Test';
    }
  }
}
