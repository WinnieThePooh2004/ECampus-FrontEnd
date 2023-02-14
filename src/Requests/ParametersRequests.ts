import {QueryParameters} from "../QueryParameters/QueryParameters";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaginationResponse} from "../Models/PaginationResponse";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParametersRequests<TData, TParameters extends QueryParameters>{
  constructor(private client: HttpClient) {
    this.client = client;
  }

  public getByParameters(parameters: TParameters): Observable<PaginationResponse<TData>> {
    let headers = {'Authorization': 'Bearer ' + localStorage.getItem('token')!};
    return this.client.get<PaginationResponse<TData>>(
      `http://localhost:5000/api/Auditories?${parameters.toQueryString()}`, {headers: headers});
  }
}
