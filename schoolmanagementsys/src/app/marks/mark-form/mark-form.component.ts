import { Component, OnInit } from '@angular/core';
import { MarkService } from '../mark.service';
import { Marks } from '../marks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mark-form',
  templateUrl: './mark-form.component.html',
  styleUrls: ['./mark-form.component.css']
})
export class MarkFormComponent implements OnInit{

  constructor(private service:MarkService,private router:Router,private route: ActivatedRoute){};

  serverMessage!:any;
  marks:Marks = new Marks();
  studentId!:number;
  id:number=this.studentId;
  
   
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Convert the ID string to a number
      const id = Number(params.get('id'));
      // Call the method to fetch the student based on the ID
      console.log(id)
    });
  }

   onSubmit(){
    this.service.updateMarksForStudent(this.id,this.marks).subscribe((data)=>{
    this.serverMessage=data;
      console.log(data);
    },
    (error) => {
      console.error(error); // Log error response
      this.serverMessage = { message: '', error: error.error.error }; // Set error message
  });
   
   }

   gotostudentlist(){
    this.router.navigate(['/student-list'])
   }
 
   gotomarklist(){
    this.router.navigate(['/mark-list'])
   }
  

}
