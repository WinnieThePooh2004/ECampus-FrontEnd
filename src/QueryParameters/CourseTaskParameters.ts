import {QueryParameters} from "./QueryParameters";
import {CourseTask} from "../Models/CourseTask";

export class CourseTaskParameters extends QueryParameters<CourseTask>{
  public courseId = 0;

  public override toQueryString(): string {
    return super.toQueryString() + `&courseId=${this.courseId}`;
  }
}
