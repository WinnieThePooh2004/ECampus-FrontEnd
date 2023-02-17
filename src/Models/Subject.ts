import {Model} from "./Model";
import {Teacher} from "./Teacher";

export class Subject extends Model{
  public name = '';
  public teachers: Teacher[] | null = null;
}
