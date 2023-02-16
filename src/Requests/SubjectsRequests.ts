import {ParametersRequests} from "./ParametersRequests";
import {SubjectParameters} from "../QueryParameters/SubjectParameters";
import {Subject} from "../Models/Subject";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SubjectsRequests extends ParametersRequests<Subject, SubjectParameters>{
  public constructor(client: HttpClient) {
    super(client, 'subjects');
  }
}
