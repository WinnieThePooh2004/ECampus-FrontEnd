import {Model} from "./Model";

export class CourseTask extends Model{
  public name = '';
  public deadline = new Date(Date.now() + 1000 * 60);
  public validAfterDeadline = false;
  public maxPoints = 0;
  public coefficient: number = 1;
  public courseId = 0;
  public type = TaskType.Classwork;
}

export enum TaskType
{
  Classwork,
  Homework,
  Test,
  Exam
}
