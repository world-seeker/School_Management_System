import { Component, OnInit } from '@angular/core';
import { MarkService } from '../mark.service';
import { Marks } from '../marks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-list',
  templateUrl: './mark-list.component.html',
  styleUrls: ['./mark-list.component.css']
})
export class MarkListComponent implements OnInit {

  constructor(
    private service:MarkService,
    private router:Router
    ){}
  marks!:Marks[]; 
  ngOnInit(): void {
    this.getMarks();
  }
  gotodetails(id:number){
    this.router.navigate(['/student-detail',id])
  }

  getMarks(){
    this.service.getMarks().subscribe({
      next:(data)=>{
        console.log(data);
        this.marks = data;
      },
      error:(err)=>{
        console.log(err);
      }
    }
)  }


}
