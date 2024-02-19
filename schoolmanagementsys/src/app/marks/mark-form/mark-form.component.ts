import { Component } from '@angular/core';
import { MarkService } from '../mark.service';
import { Marks } from '../marks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-form',
  templateUrl: './mark-form.component.html',
  styleUrls: ['./mark-form.component.css']
})
export class MarkFormComponent {

  constructor(private service:MarkService,private router:Router){};
  marks:Marks = new Marks();
  id!:number;
   onSubmit(){
    this.service.updateMarksForStudent(this.id,this.marks).subscribe((data)=>{
      console.log(data);
    });
   }

   gotostudentlist(){
    this.router.navigate(['/student-list'])
   }
 
   gotomarklist(){
    this.router.navigate(['/mark-list'])
   }
  

}
