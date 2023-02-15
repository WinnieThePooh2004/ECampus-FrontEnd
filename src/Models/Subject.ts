import {Model} from "./Model";
import {ArrayList} from "ts-collections";
import {Teacher} from "./Teacher";

export class Subject extends Model{
  public name = '';
  public teachers = new ArrayList<Teacher>();
}
