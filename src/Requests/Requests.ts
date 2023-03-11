import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class Requests<TData>{
  private static readonly baseUrl = 'http://localhost:5000/api';
  protected readonly url;
  constructor(protected client: HttpClient, apiControllerName: string) {
    this.url = `${Requests.baseUrl}/${apiControllerName}`;
  }

  public getById(id: number): Observable<TData>{
    return this.client.get<TData>(`${this.url}/${id.toString()}`);
  }

  public update(item: TData): Observable<any>{
    return this.client.put(this.url, item);
  }

  public create(item: TData): Observable<any>{
    return this.client.post(this.url, item);
  }

  public delete(id: number): Observable<any> {
    return this.client.delete(this.url + '/' + id.toString());
  }
}
