import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: Student = new Student(); 

  constructor(private service:StudentService,private router:Router) {}

  gotostudentlist(){
   this.router.navigate(['/student-list'])
  }

  gotomarklist(){
   this.router.navigate(['/mark-list'])
  }

  gotomarkupdation(){
   this.router.navigate(['/mark-updation']);
  }

  onSubmit(): void {
    this.service.createStudent(this.student).subscribe({
       next: (data) => {
          console.log('Request successful:', data);
       },
       error: (error) => {
          console.log('Error occurred:', error);
          // Handle error here, e.g., display an error message to the user
       },
       complete: () => {
          console.log('Request completed.');
          this.router.navigate(['/student-list'])
          // Handle completion here, if necessary
       }
    });
 }
 
}
