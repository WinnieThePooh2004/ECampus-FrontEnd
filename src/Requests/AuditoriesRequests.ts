import {ParametersRequests} from "./ParametersRequests";
import {Auditory} from "../Models/Auditory";
import {AuditoryParameters} from "../QueryParameters/AuditoryParameters";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuditoriesRequests extends ParametersRequests<Auditory, AuditoryParameters>{
  public constructor(client: HttpClient) {
    super(client, 'auditories');
  }
}
