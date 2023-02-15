import {QueryParameters} from "./QueryParameters";
import {Faculty} from "../Models/Faculty";

export class FacultyParameters extends QueryParameters<Faculty>{
  public name: string = '';

  public constructor() {
    super();
    this.orderBy = 'name';
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&name=${this.name}`;
  }
}
