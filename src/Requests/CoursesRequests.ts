import {ParametersRequests} from "./ParametersRequests";
import {Course} from "../Models/Course";
import {CourseParameters} from "../QueryParameters/CourseParameters";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CoursesRequests extends ParametersRequests<Course, CourseParameters>{
  public constructor(client: HttpClient) {
    super(client, 'courses');
  }
}
