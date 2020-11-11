import { Component, OnInit } from '@angular/core';
import {InformService} from '../service/inform.service';

@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {

  depart: string;
  cour: string;
  seme: string;
  year: string;
  data: object;
  constructor(public informService: InformService) { }

  ngOnInit(): void {
    this.informService.Clicker();
    this.data=this.informService.IForm.value;
    this.depart= this.informService.IForm.value.department
    this.cour= this.informService.IForm.value.course
    this.seme= this.informService.IForm.value.semester
    this.year = this.informService.IForm.value.year
    console.log("register" + this.informService.IForm.value);
  }

}
