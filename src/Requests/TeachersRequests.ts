import {ParametersRequests} from "./ParametersRequests";
import {TeacherParameters} from "../QueryParameters/TeacherParameters";
import {Teacher} from "../Models/Teacher";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TeachersRequests extends ParametersRequests<Teacher, TeacherParameters>{
  public constructor(client: HttpClient) {
    super(client, 'teachers');
  }
}
