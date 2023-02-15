import {Model} from "./Model";
import {Student} from "./Student";
import {CourseTask} from "./CourseTask";

export class TaskSubmission extends Model{
  public courseTaskId = 0;
  public studentId = 0;
  public isMarked = false;
  public submissionContent = '';
  public student: Student | null = null;
  public courseTask: CourseTask | null = null;
}
