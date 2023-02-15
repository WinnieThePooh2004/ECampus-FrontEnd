import {QueryParameters} from "./QueryParameters";
import {TaskSubmission} from "../Models/TaskSubmission";

export class TaskSubmissionParameters extends QueryParameters<TaskSubmission>{
  public courseTaskId = 0;

  public constructor() {
    super();
    this.orderBy = 'Student.FirstName';
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&courseTaskId=${this.courseTaskId}`;
  }
}
