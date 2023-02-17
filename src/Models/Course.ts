import {Model} from "./Model";
import {Group} from "./Group";
import {Teacher} from "./Teacher";

export class Course extends Model{
  public name = '';
  public startDate = new Date(Date.now());
  public endDate = new Date(Date.now());
  public subjectId = 0;
  public groups: Group[] | null = null;
  public teachers: Teacher[] | null = null;
}
