import {QueryParameters} from "./QueryParameters";
import {SortOrder} from "./SortOrder";

export class AuditoryParameters extends QueryParameters{
  public name: string = '';
  public building: string = '';

  public constructor() {
    super(1, 10, SortOrder.Ascending, 'name');
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&auditoryName=${this.name}&buildingName=${this.building}`;
  }
}
