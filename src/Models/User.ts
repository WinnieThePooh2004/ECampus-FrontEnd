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
  public roleName(): string{
    switch (this.role){
      case UserRole.Admin: return 'Admin';
      case UserRole.Guest: return 'Guest';
      case UserRole.Student: return 'Student';
      case UserRole.Teacher: return 'Teacher';
    }
  }
  public constructor() {
    super();
  }
}

export enum UserRole
{
  Guest,
  Student,
  Teacher,
  Admin
}
