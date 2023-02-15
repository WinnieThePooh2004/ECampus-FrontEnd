import {QueryParameters} from "./QueryParameters";
import {Group} from "../Models/Group";

export class GroupParameters extends QueryParameters<Group>{
  public departmentId = 0;
  public name = '';

  public override toQueryString(): string {
    return super.toQueryString() + `&departmentId=${this.departmentId}&name=${this.name}`;
  }
}
