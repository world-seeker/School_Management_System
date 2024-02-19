import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080/api/teachers'; // Adjust URL according to your backend API

  constructor(private http: HttpClient) { }

  // GET all teachers
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  // GET teacher by ID
  getTeacherById(id: number): Observable<Teacher> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Teacher>(url);
  }

  // POST create a new teacher
  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, teacher);
  }

  // DELETE teacher by ID
  deleteTeacher(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
