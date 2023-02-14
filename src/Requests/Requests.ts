import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class Requests<TData>{
  private readonly url : string = 'http://localhost:5000/api/Auditories';
  constructor(private client: HttpClient) {
  }

  public getById(id: number): Observable<TData>{
    return this.client.get<TData>(`${this.url}/${id.toString()}`);
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
