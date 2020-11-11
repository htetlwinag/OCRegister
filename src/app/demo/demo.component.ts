import { Component, OnInit } from '@angular/core';
import {StudentService} from '../service/student.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  doUrl: string;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {

  }
  clicker(): any{
    this.studentService.ngOnInit().subscribe(value => {
      this.doUrl = value.message;
      console.log(value.status);
      console.log(value.message);
    });
  }

}


