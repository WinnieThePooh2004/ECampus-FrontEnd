import {Model} from "./Model";
import {Teacher} from "./Teacher";
import {Student} from "./Student";

export class User extends Model{
  public username = '';
  public password = 'password';
  public email = '';
  public role = UserRole.Guest;
  public studentId: number | null = null;
  public teacherId: number | null = null;
  public teacher: Teacher | null = null;
  public student: Student | null = null;
}

export enum UserRole
{
  Guest,
  Student,
  Teacher,
  Admin
}
