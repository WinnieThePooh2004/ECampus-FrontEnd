import {QueryParameters} from "../QueryParameters/QueryParameters";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaginationResponse} from "../Models/PaginationResponse";
import {Requests} from "./Requests";
import {Model} from "../Models/Model";

export class ParametersRequests<TData extends Model, TParameters extends QueryParameters<TData>> extends Requests<TData>{
  constructor(client: HttpClient, apiControllerName: string) {
    super(client, apiControllerName);
  }

  public getByParameters(parameters: TParameters): Observable<PaginationResponse<TData>> {
    let headers = {'Authorization': 'Bearer ' + localStorage.getItem('token')!};
    return this.client.get<PaginationResponse<TData>>(
      `${this.url}?${parameters.toQueryString()}`, {headers: headers});
  }
}
