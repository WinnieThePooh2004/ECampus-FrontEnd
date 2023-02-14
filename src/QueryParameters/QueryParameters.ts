import {SortOrder} from "./SortOrder";

export abstract class QueryParameters{
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public sortOrder: SortOrder = SortOrder.Ascending;
  public orderBy: string = '';

  public toQueryString(): string{
    return `pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&sortOrder=${this.sortOrder}&orderBy=${this.orderBy}`;
  }
}
