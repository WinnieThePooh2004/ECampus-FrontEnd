import {QueryParameters} from "./QueryParameters";
import {Course} from "../Models/Course";

export class CourseParameters extends QueryParameters<Course>{
  public groupId = 0;
  public teacherId = 0;
  public name = '';

  public override toQueryString(): string {
    return super.toQueryString() + `&groupId=${this.groupId}&teacherId=${this.teacherId}&name=${this.name}`;
  }
}
