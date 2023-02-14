import {QueryParameters} from "./QueryParameters";

export class FacultyParameters extends QueryParameters{
  public name: string = '';

  public constructor() {
    super();
    this.orderBy = 'name';
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&name=${this.name}`;
  }
}
