import {ParametersRequests} from "./ParametersRequests";
import {CourseTask} from "../Models/CourseTask";
import {CourseTaskParameters} from "../QueryParameters/CourseTaskParameters";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CourseTasksRequests extends ParametersRequests<CourseTask, CourseTaskParameters>{
  public constructor(client: HttpClient) {
    super(client, 'courseTasks');
  }
}
