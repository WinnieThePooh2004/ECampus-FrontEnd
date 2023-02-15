import {Model} from "./Model";

export class CourseSummary implements Model{
  public courseId = 0;
  public name = '';
  public maxPoints = 0.0;
  public scoredPoints = 0.0;
  public teacherNames = '';
  public startDate = Date.now();
  public endDate = Date.now();

  get id(): number {
    return this.courseId;
  }

  set id(value: number) {
    this.courseId = value;
  }

}
