import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-form/student';
import { MarkService } from 'src/app/marks/mark.service';
import { Marks } from 'src/app/marks/marks';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private service:StudentService,private router:ActivatedRoute,private marksservice:MarkService){}

   

   student!:Student; 
   marks!:Marks;
  
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
  
   getStudent(id:number){
     this.service.getStudentById(id).subscribe((data)=>{
      this.student = data;
      console.log(data);
     })
  }
   
  getMark(id:number){
    this.marksservice.getMarksForStudent(id).subscribe((data)=>{
       this.marks=data;
       console.log(data);
    })
  }

}
