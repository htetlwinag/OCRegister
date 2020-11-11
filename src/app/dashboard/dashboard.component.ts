import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {DepartmentService} from '../service/department.service';
import {InformService} from '../service/inform.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  dpList: object;
  courseList: object;

  years = ['2CS&2CT', '3CS&3CT', '4CS&4CT', '5CS&5CT'];

  constructor(public router: Router, private departService: DepartmentService, public informService: InformService) {

  }

  ngOnInit(): void {
    this.departService.getCourses().subscribe(
      value => {
        this.courseList = value.result;
        console.log(value)
      }
    );
    this.departService.getDepartments().subscribe(
      value => {
        this.dpList = value.result;
        // console.log(value.result);
        // console.log(value)
      }
    );
  }
}










// submit(myForm: NgForm): void{
//   const registerlist: RegisterList= new RegisterList(this.myForm.value.course, this.myForm.value.department, this.myForm.value.semester, this.myForm.value.year);
//   console.log(this.myForm.value.course, this.myForm.value.department, this.myForm.value.semester, this.myForm.value.year);
//   console.log(registerlist);
//   this.registerlist.push(registerlist);
//   this.router.navigate(['inform']);
// }
