import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student.module.';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService implements OnInit{

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<StudentList>{
    return this.httpClient.get<StudentList>('http://localhost:9090/intern/students');
  }

  deleteStudent(id: number) : Observable<Student>{
    return this.httpClient.delete<Student>('http://localhost:9090/intern/student/' + id);
  }

  createStudent(student: Register): Observable<any>{
    return this.httpClient.post('http://localhost:9090/intern/create', student);
  }

  updateStudent(updateResult: Result): Observable<Result>{
    return this.httpClient.put<Result>(`http://localhost:9090/intern/student/`, updateResult);
  }

  getStudentById(id: string): Observable<Student>{
    return this.httpClient.get<Student>('http://localhost:9090/intern/student/' + id);
  }
  ngOnInit(): void {
  }

}
  export interface Result {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    birthDate: string;
    studentId: string;
  }

  export interface StudentList {
    errorCode: number;
    result: Result[];
    message: string;
  }

interface Register{
  name: string;
  email: string;
  phone: string;
  studentId: string;
  con_password: string;
  password: string;
}
