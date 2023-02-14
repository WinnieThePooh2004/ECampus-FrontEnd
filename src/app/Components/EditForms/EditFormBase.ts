import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Model} from "../../../Models/Model";

@Component({
  template: ''
})
export abstract class EditFormBase<TModel extends Model> implements OnInit{
  @Input() public model!: TModel;
  @Input() public title!: string;
  @Output() onSubmit: EventEmitter<TModel> = new EventEmitter<TModel>();
  protected constructor() {
  }

  public submit(): void{
    this.onSubmit.emit(this.model);
  }

  ngOnInit(): void {
  }
}
