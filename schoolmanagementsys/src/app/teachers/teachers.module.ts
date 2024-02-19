import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherDetailsComponent,
    TeacherFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TeachersModule { }
