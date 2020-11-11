import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit{

  constructor(public httpClient: HttpClient) {}

  ngOnInit(): Observable<Dog> {
    return this.httpClient.get<Dog>('https://dog.ceo/api/breeds/image/random');
  }

  // clicker(): Observable<Dog> {
  //    return this.httpClient.get<Dog>('https://dog.ceo/api/breeds/image/random');
  // }
}
interface Dog {
  message: string;
  status: string;
}
