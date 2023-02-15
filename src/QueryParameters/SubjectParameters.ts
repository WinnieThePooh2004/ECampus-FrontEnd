import {QueryParameters} from "./QueryParameters";
import {Subject} from "../Models/Subject";

export class SubjectParameters extends QueryParameters<Subject>{
  public name = '';
  public override toQueryString(): string {
    return super.toQueryString() + `&name=${this.name}`;
  }
}
