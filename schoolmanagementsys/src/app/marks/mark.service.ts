import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Marks } from './marks';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  private apiUrl = 'http://localhost:8080/api/marks'; // Replace this with your API endpoint
  


  constructor(private http: HttpClient) { }

  // Fetch marks for all students
  getMarks(): Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.apiUrl}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching marks:', error);
          throw error;
        })
      );
  }

  // Fetch marks for a specific student by ID
  getMarksForStudent(studentId: number): Observable<any> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.http.get<Marks>(url)
      .pipe(
        catchError((error: any) => {
          console.error(`Error fetching marks for student ${studentId}:`, error);
          throw error;
        })
      );
  }

  // Update marks for a specific student
  updateMarksForStudent(studentId: number, marksData: Marks): Observable<Marks> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.http.put<Marks>(url, marksData)
      .pipe(
        catchError((error: any) => {
          console.error(`Error updating marks for student ${studentId}:`, error);
          throw error;
        })
      );
  }
}
