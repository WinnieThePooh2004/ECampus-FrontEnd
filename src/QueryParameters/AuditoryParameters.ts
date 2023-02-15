import {QueryParameters} from "./QueryParameters";
import {Auditory} from "../Models/Auditory";

export class AuditoryParameters extends QueryParameters<Auditory>{
  public name: string = '';
  public building: string = '';

  public override toQueryString(): string {
    return super.toQueryString() + `&auditoryName=${this.name}&buildingName=${this.building}`;
  }
}
