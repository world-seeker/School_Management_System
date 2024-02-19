import { Component, OnInit } from '@angular/core';
import { MarkService } from '../mark.service';
import { Marks } from '../marks';

@Component({
  selector: 'app-mark-list',
  templateUrl: './mark-list.component.html',
  styleUrls: ['./mark-list.component.css']
})
export class MarkListComponent implements OnInit {

  constructor(private service:MarkService){}
  marks!:Marks[]; 
  ngOnInit(): void {
    this.getMarks();
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
