import {QueryParameters} from "./QueryParameters";
import {Student} from "../Models/Student";

export class StudentParameters extends QueryParameters<Student>{
  public lastName = '';
  public firstName = '';
  public groupId = '';
  public userIdCanBeNull = true;

  public override toQueryString(): string {
    return super.toQueryString() + `&lastName=${this.lastName}&firstName=${this.firstName}
    &groupId=${this.groupId}&userIdCanBeNull=${this.userIdCanBeNull}`;
  }
}
