import {ParametersRequests} from "./ParametersRequests";
import {Faculty} from "../Models/Faculty";
import {FacultyParameters} from "../QueryParameters/FacultyParameters";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FacultiesRequests extends ParametersRequests<Faculty, FacultyParameters>{
  public constructor(client: HttpClient) {
    super(client, 'faculties');
  }
}
