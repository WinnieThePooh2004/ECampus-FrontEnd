import {Model} from "./Model";

export class Log extends Model{
  public message = '';
  public timeStamp = Date.now();
  public messageTemplate = '';
  public level = LogEventLevel.Fatal;
  public exception = '';
  public properties = '';
}

export enum LogEventLevel{
  Verbose,
  Debug,
  Information,
  Warning,
  Error,
  Fatal
}
