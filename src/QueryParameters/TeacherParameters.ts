import {QueryParameters} from "./QueryParameters";
import {Teacher} from "../Models/Teacher";

export class TeacherParameters extends QueryParameters<Teacher>{
  public lastName = '';
  public firstName = '';
  public departmentId = 0;
  public userIdCanBeNull = true;

  public constructor() {
    super();
    this.orderBy = 'lastName';
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&lastName=${this.lastName}&firstName=${this.firstName}
    &departmentId=${this.departmentId}&userIdCanBeNull=${this.userIdCanBeNull}`;
  }
}
