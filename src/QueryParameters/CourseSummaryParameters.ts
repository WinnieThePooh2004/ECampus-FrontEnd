import {QueryParameters} from "./QueryParameters";
import {CourseSummary} from "../Models/CourseSummary";

export class CourseSummaryParameters extends QueryParameters<CourseSummary>{
  public studentId = 0;

  public override toQueryString(): string {
    return super.toQueryString() + `&studentId=${this.studentId}`;
  }
}
