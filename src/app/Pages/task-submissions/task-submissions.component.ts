import {Component} from '@angular/core';
import {DataTableBase} from "../../Components/PageBases/DataTableBase";
import {TaskSubmission} from "../../../Models/TaskSubmission";
import {TaskSubmissionParameters} from "../../../QueryParameters/TaskSubmissionParameters";
import {TaskSubmissionRequests} from "../../../Requests/TaskSubmissionRequests";
import {ActivatedRoute} from "@angular/router";
import {CourseTasksRequests} from "../../../Requests/CourseTasksRequests";
import {CourseTask} from "../../../Models/CourseTask";

@Component({
  selector: 'app-task-submissions',
  templateUrl: './task-submissions.component.html',
  styleUrls: ['./task-submissions.component.css']
})
export class TaskSubmissionsComponent extends DataTableBase<TaskSubmission, TaskSubmissionParameters> {
  displayedColumns = ['position', 'studentEmail', 'totalPoints', 'actions'];
  public task: CourseTask | null = null;
  public constructor(requests: TaskSubmissionRequests, route: ActivatedRoute,
                     private readonly tasksRequests: CourseTasksRequests) {
    super(requests);
    this.parameters = new TaskSubmissionParameters();
    this.parameters.courseTaskId = Number(route.snapshot.paramMap.get('courseTaskId'));
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.tasksRequests.getById(this.parameters.courseTaskId).subscribe({
      next: task => this.task = task
    });
  }

  public onMarked(){
    this.editModel = null;
    this.refreshData();
  }
}
