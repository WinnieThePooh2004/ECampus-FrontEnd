import {Component} from '@angular/core';
import {TaskSubmission} from "../../../Models/TaskSubmission";
import {TaskSubmissionRequests} from "../../../Requests/TaskSubmissionRequests";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-edit-submission',
  templateUrl: './edit-submission.component.html',
  styleUrls: ['./edit-submission.component.css']
})
export class EditSubmissionComponent {
  public model: TaskSubmission | null = null;
  private readonly datePipe = new DatePipe('en-Us');
  private deadlineTime!: number;
  public constructor(
    private readonly requests: TaskSubmissionRequests,
    route: ActivatedRoute
  ) {
    requests.getByTaskId(Number(route.snapshot.paramMap.get('courseTaskId'))).subscribe({
      next: response => {
        this.deadlineTime = new Date(response.courseTask?.deadline!).getTime();
        this.model = response;
      }
    });
  }

  public untilDeadline(): string {
    return this.toDateString(new Date(this.deadlineTime - Date.now()));
  }

  public deadlineWas(): string{
    return this.toDateString(new Date(Date.now() - this.deadlineTime));
  }

  public beforeDeadline(): boolean{
    if(this.model == null){
      return false;
    }
    return this.deadlineTime > Date.now();
  }

  private toDateString(date: Date): string {
    return this.datePipe.transform(date, 'dd MMM YYYY HH:mm')!;
  }

  save() {
    this.requests.updateContent(this.model!.id, this.model?.submissionContent!).subscribe({
      next: () => {}
    });
  }
}
