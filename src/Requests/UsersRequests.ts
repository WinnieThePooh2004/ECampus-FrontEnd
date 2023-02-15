import {ParametersRequests} from "./ParametersRequests";
import {User} from "../Models/User";
import {UserParameters} from "../QueryParameters/UserParameters";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersRequests extends ParametersRequests<User, UserParameters>{
  public constructor(client: HttpClient) {
    super(client, 'users');
  }
}
