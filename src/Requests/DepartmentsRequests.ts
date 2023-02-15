import {ParametersRequests} from "./ParametersRequests";
import {Department} from "../Models/Department";
import {DepartmentParameters} from "../QueryParameters/DepartmentParameters";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DepartmentsRequests extends ParametersRequests<Department, DepartmentParameters>{
  public constructor(client: HttpClient) {
    super(client, 'departments');
  }
}
