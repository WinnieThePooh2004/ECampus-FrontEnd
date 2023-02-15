import {Injectable} from "@angular/core";
import {ParametersRequests} from "./ParametersRequests";
import {Student} from "../Models/Student";
import {StudentParameters} from "../QueryParameters/StudentParameters";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentsRequests extends ParametersRequests<Student, StudentParameters>{
  public constructor(client: HttpClient) {
    super(client, 'students');
  }
}
