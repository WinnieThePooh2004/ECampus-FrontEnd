import {ParametersRequests} from "./ParametersRequests";
import {TaskSubmission} from "../Models/TaskSubmission";
import {TaskSubmissionParameters} from "../QueryParameters/TaskSubmissionParameters";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {MarkSubmissionDto} from "../Models/MarkSubmissionDto";
import {UpdateSubmissionContentDto} from "../Models/UpdateSubmissionContentDto";

@Injectable({
  providedIn: "root"
})
export class TaskSubmissionRequests extends ParametersRequests<TaskSubmission, TaskSubmissionParameters>{
  public constructor(client: HttpClient) {
    super(client, 'taskSubmissions');
  }

  public updateMark(taskSubmissionId: number, mark: number): Observable<any>{
    let dto: MarkSubmissionDto = { submissionId: taskSubmissionId, mark: mark };
    return this.client.put(`${this.url}/mark`, dto);
  }

  public updateContent(taskSubmissionId: number, content: string): Observable<any>{
    let dto: UpdateSubmissionContentDto = { submissionId: taskSubmissionId, content: content };
    return this.client.put(`${this.url}/content`, dto);
  }

  public getByTaskId(courseTaskId: number): Observable<TaskSubmission>{
    return this.client.get<TaskSubmission>(`${this.url}/byCourseTask/${courseTaskId}`);
  }
}
