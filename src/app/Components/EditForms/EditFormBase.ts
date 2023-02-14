import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {IModel} from "../../../Models/IModel";
import {Requests} from "../../../Requests/Requests";

@Component({
  template: ''
})
export abstract class EditFormBase<TModel extends IModel> implements OnInit{
  @Input() public model!: TModel;
  @Input() public title!: string;
  @Output() onSubmit: EventEmitter<void> = new EventEmitter<void>();
  protected constructor(private requests: Requests<TModel>) {
  }

  public submit(): void{
    if(this.model.id == 0){
      this.requests.create(this.model).subscribe({
        next: (response: TModel) => {
          this.model = response;
          this.title = 'edit';
          this.onSubmit.emit();
        }
      });
      return;
    }
    this.requests.update(this.model).subscribe({
      next: (response: TModel) => {
        this.model = response;
        this.onSubmit.emit();
      }
    });
  }

  ngOnInit(): void {
  }
}
