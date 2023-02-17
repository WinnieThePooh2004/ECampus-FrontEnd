export class LoginResult{
  public userId!: number;
  public groupId: number | null = null;
  public role!: string;
  public token!: string;
  public teacherId: number | null = null;
  public email!: string;
  public studentId: number | null = null;
  public username!: string;
}
