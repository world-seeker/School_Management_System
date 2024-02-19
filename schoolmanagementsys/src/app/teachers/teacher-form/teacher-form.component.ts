import { Component } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {
  teacher: Teacher = new Teacher(); // Assuming you have a Teacher class defined

  constructor(private service: TeacherService, private router: Router) {}

  onSubmit(): void {
    this.service.createTeacher(this.teacher).subscribe({
       next: (data) => {
          console.log('Request successful:', data);
       },
       error: (error) => {
          console.log('Error occurred:', error);
          // Handle error here, e.g., display an error message to the user
       },
       complete: () => {
          console.log('Request completed.');
          this.router.navigate(['/teacher-list'])
          // Handle completion here, if necessary
       }
    });
  }
}
