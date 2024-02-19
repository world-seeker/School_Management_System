import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student-form/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL="http://localhost:8080/api/students";
  
  constructor(private httpClient:HttpClient) { }

  getStudentById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}`+`/`+`${id}`)
  }

   getStudentList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
   }

   createStudent(student:Student,):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,student);
   }

   deleteStudent(id:number){
    return this.httpClient.delete(`${this.baseURL}`+`/${id}`)
   }

  
   
}
