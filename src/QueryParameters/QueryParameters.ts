import {SortOrder} from "./SortOrder";
import {Model} from "../Models/Model";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";

export abstract class QueryParameters<TModel extends Model>{
  public static readonly pageSizeOptions = [5, 10, 20, 50, 100];
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public sortOrder: SortOrder = SortOrder.Ascending;
  public orderBy: string = 'name';

  public toQueryString(): string{
    return `pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&sortOrder=${this.sortOrder}&orderBy=${this.orderBy}`;
  }

  public change(sort: Sort){
    this.sortOrder = sort.direction == 'asc' ? SortOrder.Ascending : SortOrder.Descending;
    this.orderBy = sort.active;

  }

  public changePaginationData(event: PageEvent){
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
}
