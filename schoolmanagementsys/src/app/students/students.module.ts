import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { MarksModule } from '../marks/marks.module';
import { MarkService } from '../marks/mark.service';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MarksModule
  ],
  providers:[MarkService]

})
export class StudentsModule { }
