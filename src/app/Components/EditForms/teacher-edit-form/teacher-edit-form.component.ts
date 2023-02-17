import {Component, ViewChild} from '@angular/core';
import {EditFormBase} from "../EditFormBase";
import {Teacher} from "../../../../Models/Teacher";
import {SubjectsRequests} from "../../../../Requests/SubjectsRequests";
import {SubjectParameters} from "../../../../QueryParameters/SubjectParameters";
import {MatTableDataSource} from "@angular/material/table";
import {Subject} from "../../../../Models/Subject";
import {MatPaginator} from "@angular/material/paginator";
import {PaginationResponse} from "../../../../Models/PaginationResponse";

@Component({
  selector: 'app-teacher-edit-form',
  templateUrl: './teacher-edit-form.component.html',
  styleUrls: ['./teacher-edit-form.component.css']
})
export class TeacherEditFormComponent extends EditFormBase<Teacher>{
  public readonly subjectParameter = new SubjectParameters();
  public readonly subjectsData = new MatTableDataSource<Subject>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public constructor(
    private readonly subjectRequests: SubjectsRequests) {
    super();
  }

  public refreshSubjectData(){
    this.subjectRequests.getByParameters(this.subjectParameter).subscribe({
      next: (response: PaginationResponse<Subject>) => {
        this.paginator.length = response.metadata.totalCount;
        this.subjectsData.data = response.data;
      }
    });
  }

  public subjectNameChanged(name: string){
    this.subjectParameter.name = name;
    this.refreshSubjectData();
  }
}
