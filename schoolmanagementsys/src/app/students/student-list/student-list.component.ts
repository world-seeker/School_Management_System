import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Student } from '../student-form/student';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private service:StudentService,private httpClient:HttpClient, private router:Router){}
   
  students!:Student[];


  gotomarks(id:number){
    this.router.navigate(['/student-detail',id])
  }

  ngOnInit():void{
   this.getStudents();
  }

  private getStudents(){
    this.service.getStudentList().subscribe(
      data => {
        this.students=data;
      }
    )
  }

  delete(id: number): void {
    this.service.deleteStudent(id).subscribe({
      next: (data) => {
        console.log('Request successful:', data);
      
      },
      error: (error) => {
        console.log('Error occurred:', error);
        // Handle error here, e.g., display an error message to the user
      },
      complete: () => {
        console.log('Request completed.');
         this.getStudents()
        // Handle completion here, if necessary
      }
    });
  }
  
}
