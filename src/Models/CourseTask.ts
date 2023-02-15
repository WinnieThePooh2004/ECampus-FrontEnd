import {Model} from "./Model";

export class CourseTask extends Model{
  public name = '';
  public deadline = Date.now() + 1000 * 60;
  public validAfterDeadline = false;
  public maxPoints = 0;
  public coefficient: number = 1;
  public courseId = 0;

  public absoluteMaxPoints(): number{
    return this.maxPoints * this.coefficient;
  }
}
