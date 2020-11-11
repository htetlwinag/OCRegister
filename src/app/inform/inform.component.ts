import {Component, OnInit} from '@angular/core';
import {InformService} from '../service/inform.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit {

  department: string;
  course: string;
  semester: string;
  year: string;
  data: any;
  constructor(private infoS: InformService) { }

  ngOnInit(): void {
    this.infoS.Clicker();
    this.department= this.infoS.IForm.value.department
    this.course= this.infoS.IForm.value.course
    this.semester= this.infoS.IForm.value.semester
    this.year = this.infoS.IForm.value.year
    console.log(this.infoS.IForm.value.department);

  }

}
