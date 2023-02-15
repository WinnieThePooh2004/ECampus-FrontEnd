import {Model} from "./Model";
import {ArrayList} from "ts-collections";
import {Group} from "./Group";
import {Auditory} from "./Auditory";
import {Teacher} from "./Teacher";

export class UserProfile extends Model{
  public username = '';
  public email = '';
  public savedAuditories = new ArrayList<Auditory>();
  public savedGroups = new ArrayList<Group>();
  public savedTeachers = new ArrayList<Teacher>();
}
