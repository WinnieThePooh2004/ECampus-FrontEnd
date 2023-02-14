import {Component, OnInit, ViewChild} from "@angular/core";
import {Model} from "../../../Models/Model";
import {QueryParameters} from "../../../QueryParameters/QueryParameters";
import {ParametersRequests} from "../../../Requests/ParametersRequests";
import {MatTableDataSource} from "@angular/material/table";
import {PaginationResponse} from "../../../Models/PaginationResponse";
import {Sort} from "@angular/material/sort";
import {SortOrder} from "../../../QueryParameters/SortOrder";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  template: ''
})
export class DataTableBase<TData extends Model, TParameters extends QueryParameters> implements OnInit{
  public pageSizeOptions = [5, 10, 20, 50, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public tableData: MatTableDataSource<TData> = new MatTableDataSource<TData>([]);
  public editModel: TData | null = null;
  public editFormTitle: string = '';
  public editEnabled = false;
  protected parameters!: TParameters;

  public constructor(private requests: ParametersRequests<TData, TParameters>) {
    this.editEnabled = localStorage.getItem('role') == 'Admin';
  }

  ngOnInit(): void {
    this.refreshData();
  }

  public sortChanged(sort: Sort){
    this.parameters.sortOrder = sort.direction == 'asc' ? SortOrder.Ascending : SortOrder.Descending;
    this.parameters.orderBy = sort.active;
    this.refreshData();
  }

  public refreshData(): void{
    this.requests.getByParameters(this.parameters).subscribe({
        next: (response: PaginationResponse<TData>) => {
          this.tableData.data = response.data;
          this.paginator!.length = response.metadata.totalCount;
        }
      });
  }

  public paginationInfoChanged(event: PageEvent): void{
    this.parameters.pageNumber = event.pageIndex + 1;
    this.parameters.pageSize = event.pageSize;
    this.refreshData();
  }

  public delete(id: number): void{
    this.requests.delete(id).subscribe({
      next: () => this.refreshData()
    });
  }

  public create(model: TData){
    this.editModel = model;
    this.editFormTitle = 'Create new';
  }

  public cancelEdit(){
    this.editModel = null;
  }

  public edit(id: number){
    this.requests.getById(id).subscribe({
      next: (response: TData) => {
        this.editModel = response;
        this.editFormTitle = 'Edit';
      }
    });
  }

  public save(model: TData){
    if(model.id == 0){
      this.requests.create(model).subscribe({
        next: () => this.refreshData()
      });
      return;
    }
    this.requests.update(model).subscribe({
      next: () => this.refreshData()
    });
  }
}
