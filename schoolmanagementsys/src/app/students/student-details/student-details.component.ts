import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Student } from '../student-form/student';
import { MarkService } from 'src/app/marks/mark.service';
import { Marks } from 'src/app/marks/marks';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(
    private service: StudentService,
    private router: ActivatedRoute,
    private marksservice: MarkService,
    private route: Router
  ) { }

  grade: string = '';
  student!: Student;
  marks!: Marks;

  ngOnInit(): void {
    // Fetch the ID number from the route URL
    this.router.paramMap.subscribe(params => {
      // Convert the ID string to a number
      const id = Number(params.get('id'));
      // Call the method to fetch the student based on the ID
      this.getStudent(id);
      this.getMark(id);
    });
  }

  gotostudentmark(id: number): void {
    // Define the route path
    const routePath = `/mark-updation`;
    // Create navigation extras to pass parameters
    const navigationExtras: NavigationExtras = {
      queryParams: { id: id } // Pass the ID as a query parameter
    };
    // Navigate to the route with parameters
    this.route.navigate([routePath], navigationExtras);
  }

  getStudent(id: number) {
    this.service.getStudentById(id).subscribe((data) => {
      this.student = data;
      console.log(data);
    })
  }

  getMark(id: number) {
    this.marksservice.getMarksForStudent(id).subscribe((data) => {
      this.marks = data;
      console.log(data);
      // Calculate grade after marks are fetched
      this.calculateGrade();
    });
  }

  calculateGrade(): void {
    if (this.marks && this.marks.englishMarks !== undefined && this.marks.physicsMarks !== undefined && this.marks.mathsMarks !== undefined) {
      const total = this.marks.englishMarks + this.marks.physicsMarks + this.marks.mathsMarks;
      console.log(total);
      if (total >= 270) {
        this.grade = 'A+';
      } else if (total >= 240) {
        this.grade = 'A';
      } else if (total >= 210) {
        this.grade = 'A-';
      } else if (total >= 180) {
        this.grade = 'B+';
      } else if (total >= 150) {
        this.grade = 'B';
      } else if (total >= 120) {
        this.grade = 'B-';
      } else if (total >= 90) {
        this.grade = 'C+';
      } else if (total >= 60) {
        this.grade = 'C';
      } else if (total >= 30) {
        this.grade = 'C-';
      } else {
        this.grade = 'F';
      }
    } else {
      this.grade = ''; // Handle the case when marks are not available
    }
  }

  getGradeColor() {
    let color = '';
    switch (this.grade) {
      case 'A+':
        color = 'green';
        break;
      case 'A':
        color = 'blue';
        break;
      case 'A-':
        color = 'orange';
        break;
      case 'B+':
        color = 'purple';
        break;
      case 'B':
        color = 'yellow';
        break;
      case 'B-':
        color = 'pink';
        break;
      case 'C+':
        color = 'red';
        break;
      case 'C':
        color = 'cyan';
        break;
      case 'C-':
        color = 'magenta';
        break;
      case 'F':
        color = 'gray';
        break;
      default:
        color = 'black';
        break;
    }
    return { 'color': color, 'font-weight':"bold", };
  }
}
