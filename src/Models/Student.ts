import {Model} from "./Model";

export class Student extends Model{
  public groupId = 0;
  public firstName = '';
  public lastName = '';
  public userEmail: string | null = null;
}
