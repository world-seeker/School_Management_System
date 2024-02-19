import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

  delete(id:number){
    this.teacherService.deleteTeacher(id).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{

      },
      complete:()=>{
        this.getTeachers();
      }
    })
  }
}
