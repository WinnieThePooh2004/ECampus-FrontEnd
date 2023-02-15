import {Model} from "./Model";
import {Auditory} from "./Auditory";
import {Group} from "./Group";
import {Teacher} from "./Teacher";
import {Subject} from "./Subject";

export class Class extends Model{
  public classType = ClassType.Practical;
  public number = 0;
  public dayOfWeek = 0;
  public weekDependency = WeekDependency.None;
  public teacherId = 0;
  public auditoryId = 0;
  public groupId = 0;
  public subjectId = 0;
  public auditory : Auditory | null = null;
  public group: Group | null = null;
  public teacher: Teacher | null = null;
  public subject: Subject | null = null;
}

export enum ClassType{
  Lecture,
  Practical,
  Lab
}

export enum WeekDependency{
  AppearsOnOddWeeks,
  AppearsOnEvenWeeks,
  None
}
