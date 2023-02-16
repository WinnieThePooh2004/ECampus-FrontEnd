import {Model} from "../../Models/Model";
import {QueryParameters} from "../../QueryParameters/QueryParameters";
import {ParametersRequests} from "../../Requests/ParametersRequests";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Sort} from "@angular/material/sort";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MultipleSelectBase<TData extends Model, TParameter extends QueryParameters<TData>> {
  public paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<TData>([]);
  public selected: TData[] = [];
  private select = new Map<number, boolean>();

  public parameters!: TParameter;
  public constructor(
    private readonly requests: ParametersRequests<TData, TParameter>) {
  }

  public isSelected(id: number): boolean{
    return this.select.get(id)!;
  }

  public change(id: number, isChecked: boolean) {
    let containsSelected = this.select.has(id);
    if (!isChecked) {
      if (!containsSelected) {
        return;
      }
      this.select.set(id, false);
      let teacherInSubject = this.selected.find(item => item.id == id);
      this.selected!.splice(this.selected.indexOf(teacherInSubject!));
      this.select.set(id, false);
      return;
    }

    if (this.selected.some(item => item.id == id)) {
      this.select.set(id, true);
      return;
    }

    this.select.set(id, true);
    this.selected.push(this.dataSource.data.find(item => item.id == id)!);
  }

  public refreshData() {
    this.requests.getByParameters(this.parameters).subscribe({
      next: (response => {
        this.dataSource.data = response.data;
        this.paginator.length = response.metadata.totalCount;
        let selected = this.selected.map(item => item.id);
        this.select = new Map<number, boolean>(response.data.map(item => [item.id, selected.includes(item.id)]));
      })
    })
  }

  public sortChanged(event: Sort) {
    this.parameters.change(event);
    this.refreshData();
  }

  public paginationInfoChanged(event: PageEvent) {
    this.parameters.changePaginationData(event);
    this.refreshData();
  }
}
