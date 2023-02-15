import {ParametersRequests} from "./ParametersRequests";
import {Group} from "../Models/Group";
import {GroupParameters} from "../QueryParameters/GroupParameters";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GroupRequests extends ParametersRequests<Group, GroupParameters>{
  public constructor(client: HttpClient) {
    super(client, 'groups');
  }
}
