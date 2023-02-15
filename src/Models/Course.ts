import {Model} from "./Model";
import {ArrayList} from "ts-collections";
import {Group} from "./Group";
import {Teacher} from "./Teacher";

export class Course extends Model{
  public name = '';
  public startDate = Date.now();
  public endDate = Date.now() + 1000 * 60 * 60 * 24 * 150;
  public subjectId = 0;
  public groups = new ArrayList<Group>();
  public teachers = new ArrayList<Teacher>();
}
