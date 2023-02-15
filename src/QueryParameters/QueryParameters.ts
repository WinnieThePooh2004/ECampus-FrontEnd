import {SortOrder} from "./SortOrder";
import {Model} from "../Models/Model";

export abstract class QueryParameters<TModel extends Model>{
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public sortOrder: SortOrder = SortOrder.Ascending;
  public orderBy: string = 'name';

  public toQueryString(): string{
    return `pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&sortOrder=${this.sortOrder}&orderBy=${this.orderBy}`;
  }
}
