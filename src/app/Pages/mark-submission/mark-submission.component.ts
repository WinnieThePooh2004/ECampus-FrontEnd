import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskSubmission} from "../../../Models/TaskSubmission";
import {TaskSubmissionRequests} from "../../../Requests/TaskSubmissionRequests";

@Component({
  selector: 'app-mark-submission',
  templateUrl: './mark-submission.component.html',
  styleUrls: ['./mark-submission.component.css']
})
export class MarkSubmissionComponent {
  @Input() model!: TaskSubmission;
  @Output() onMarked: EventEmitter<any> = new EventEmitter<any>();
  public constructor(private readonly requests: TaskSubmissionRequests){
  }

  public submit(){
    this.requests.updateMark(this.model.id, this.model.totalPoints).subscribe({
      next: () => this.onMarked.emit()
    });
  }
}
