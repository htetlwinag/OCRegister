import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InformService {

  IForm: FormGroup;
  data: any;
  constructor(public router: Router) {
    this.IForm = new FormGroup({
      department: new FormControl('', Validators.required),
      course : new FormControl('', Validators.required),
      semester : new FormControl('', Validators.required),
      year : new FormControl('', Validators.required)

    });
  }
  Clicker(): void {
    const registerC: RegisterCourse = {
      department: this.IForm.value.department,
      course: this.IForm.value.course,
      semester: this.IForm.value.semester,
      year: this.IForm.value.year
    };
    this.data=registerC;
    console.log(registerC);
    this.router.navigate(['inform']);
  }

}
interface RegisterCourse {
  department: string;
  course: string;
  semester: string;
  year: string;

}
