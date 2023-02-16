import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginResult} from "../Auth/LoginResult";

@Injectable({
  providedIn: "root"
})
export class AuthRequests{
  public constructor(private client: HttpClient) {
  }

  public login(email: string, password: string){
    localStorage.clear();
    email = 'initial.admin@super.com';
    password = 'AdminAdmin1';
    return this.client.post<LoginResult>('http://localhost:5000/api/Auth/login', {email: email, password: password})
      .subscribe({
        next: (response: LoginResult) => this.setSession(response)
      });
  }

  private setSession(result: LoginResult){
    localStorage.setItem('role', result.role);
    localStorage.setItem('token', result.token);
    localStorage.setItem('email', result.email);
    localStorage.setItem('username', result.username);
    localStorage.setItem('userId', result.userId.toString());
    localStorage.setItem('groupId', result.groupId?.toString() ?? '0');
    localStorage.setItem('studentId', result.studentId?.toString() ?? '0');
    localStorage.setItem('teacherId', result.teacherId?.toString() ?? '0');
  }
}
