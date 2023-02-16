import {Model} from "../../Models/Model";
import {QueryParameters} from "../../QueryParameters/QueryParameters";
import {ParametersRequests} from "../../Requests/ParametersRequests";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Sort} from "@angular/material/sort";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SingleSelectBase<TData extends Model, TParameters extends QueryParameters<TData>>{
  public paginator!: MatPaginator;
  public onChanged = new EventEmitter<number>();
  public dataSource = new MatTableDataSource<TData>([]);
  public selected: number | null = null;
  private select = new Map<number, boolean>();
  public parameters!: TParameters;

  public constructor(private readonly requests: ParametersRequests<TData, TParameters>) {
  }

  public isSelected(id: number): boolean{
    return this.select.get(id) ?? false;
  }

  public changed(id: number){
    if (this.selected == id) {
      return;
    }

    if (this.selected != null && this.select.has(id)) {
      this.select.set(this.selected, false);
    }

    this.select.set(id, true);
    this.onChanged?.emit(id);
  }

  public refreshData(){
    this.requests.getByParameters(this.parameters).subscribe({
      next: (response => {
        this.dataSource.data = response.data;
        this.paginator.length = response.metadata.totalCount;
        this.select = new Map<number, boolean>(response.data.map(item => [item.id, item.id == this.selected]));
      })
    })
  }

  public sortChanged(event: Sort){
    this.parameters.change(event);
    this.refreshData();
  }

  public paginationInfoChanged(event: PageEvent){
    this.parameters.changePaginationData(event);
    this.refreshData();
  }
}
