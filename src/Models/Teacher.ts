import {Model} from "./Model";
import {ArrayList} from "ts-collections";
import {Subject} from "./Subject";

export class Teacher extends Model{
  public departmentId = 0;
  public firstName = '';
  public lastName = '';
  public userEmail: string | null = null;
  public scienceDegree = ScienceDegree.Master;
  public subjects: ArrayList<Subject> | null = null;
}

export enum ScienceDegree{
  None,
  Master,
  PhD
}
