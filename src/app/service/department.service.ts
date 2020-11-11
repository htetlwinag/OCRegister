import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }
  getDepartments(): Observable<DepartList>{
    return this.httpClient.get<DepartList>('http://localhost:9090/intern/department-list');
  }
  getCourses(): Observable<Course>{
    return this.httpClient.get<Course>('http://localhost:9090/intern/course');
  }
  getDepartById(id: number): Observable<Dep>{
    return this.httpClient.get<Dep>('http://localhost:9090/intern/department/' + id)
  }

}

// courseInterface
export interface Result {
  id: number;
  name: string;
  departmentId: number;
}

export interface Course {
  errorCode: number;
  result: Result[];
  message: string;
}
//courseInterface end

//DepartInterface
export interface Cours {
  id: number;
  name: string;
  departmentId: number;
}

export interface Dep {
  id: number;
  name: string;
  phone: string;
  courses: Cours[];
}

export interface DepartList {
  errorCode: number;
  result: Dep[];
  message: string;
}

