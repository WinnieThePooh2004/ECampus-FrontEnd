import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  template: ''
})
export abstract class EditFormBase<TModel> implements OnInit{
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
