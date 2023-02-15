import {QueryParameters} from "./QueryParameters";
import {Department} from "../Models/Department";

export class DepartmentParameters extends QueryParameters<Department>{
  public name = '';
  public facultyId = 0;

  public constructor() {
    super();
    this.orderBy = 'name';
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&name=${this.name}&facultyId=${this.facultyId}`;
  }
}
