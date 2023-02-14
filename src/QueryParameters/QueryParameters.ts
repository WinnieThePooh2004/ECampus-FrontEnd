import {SortOrder} from "./SortOrder";

export abstract class QueryParameters{
  public pageNumber: number;
  public pageSize: number;
  public sortOrder: SortOrder;
  public orderBy: string;

  protected constructor(pageNumber: number, pageSize: number, sortOrder: SortOrder, orderBy: string) {
    this.orderBy = orderBy;
    this.pageNumber = pageNumber;
    this.sortOrder = sortOrder;
    this.pageSize = pageSize;
  }

  public toQueryString(): string{
    return `pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&sortOrder=${this.sortOrder}&orderBy=${this.orderBy}`;
  }
}
