import {QueryParameters} from "./QueryParameters";
import {User} from "../Models/User";

export class UserParameters extends QueryParameters<User>{
  public email = '';
  public username = '';

  public constructor() {
    super();
    this.orderBy = 'email';
  }
}
