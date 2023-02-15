import {QueryParameters} from "./QueryParameters";
import {Log, LogEventLevel} from "../Models/Log";

export class LogParameters extends QueryParameters<Log>{
  public from = Date.now();
  public to = Date.now();
  public minimalLevel = LogEventLevel.Information;
  public maxLevel = LogEventLevel.Fatal;

  public constructor() {
    super();
    this.orderBy = 'timeStamp';
  }

  public override toQueryString(): string {
    return super.toQueryString() + `&from=${this.from.toString()}&to=${this.to.toString()}&
        minimalLevel=${this.minimalLevel}&maxLevel=${this.maxLevel}`;
  }
}
