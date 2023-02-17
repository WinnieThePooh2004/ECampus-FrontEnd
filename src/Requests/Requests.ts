import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class Requests<TData>{
  private static readonly baseUrl : string = 'http://localhost:5000/api';
  protected readonly url;
  constructor(protected client: HttpClient, apiControllerName: string) {
    this.url = `${Requests.baseUrl}/${apiControllerName}`;
  }

  public getById(id: number): Observable<TData>{
    let headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token')! };
    return this.client.get<TData>(`${this.url}/${id.toString()}`, {headers: headers});
  }

  public update(item: TData): Observable<any>{
    let headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token')! };
    return this.client.put(this.url, item, { headers: headers });
  }

  public create(item: TData): Observable<any>{
    let headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token')! };
    return this.client.post(this.url, item, { headers: headers });
  }

  public delete(id: number): Observable<any> {
    let headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token')! };
    return this.client.delete(this.url + '/' + id.toString(), { headers: headers });
  }
}
