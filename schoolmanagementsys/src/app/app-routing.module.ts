import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { TeacherFormComponent } from './teachers/teacher-form/teacher-form.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { MarkListComponent } from './marks/mark-list/mark-list.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { MarkFormComponent } from './marks/mark-form/mark-form.component';


const routes: Routes = [
  {path:'students-form', component:StudentFormComponent},
  {path:'student-list',component:StudentListComponent},
 {path:'add-teacher' , component:TeacherFormComponent},
 {path:'teacher-list', component:TeacherListComponent},
 {path:'home', component:HomeComponent},
 {path:'mark-list',component:MarkListComponent},
 {path:"student-detail/:id",component:StudentDetailsComponent},
 {path:'mark-updation',component:MarkFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
