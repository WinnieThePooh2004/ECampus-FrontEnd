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

  public change(event: Sort){
    if(this.orderBy == event.active){
      this.sortOrder = (this.sortOrder + 1) % 2;
      return;
    }
    this.orderBy = event.active;
  }

  public changePaginationData(event: PageEvent){
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
}
