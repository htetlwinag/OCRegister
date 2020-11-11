import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

import {StudentsService} from '../service/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  mailForm: FormGroup;

  constructor(public router: Router, public studentService: StudentsService) {
    this.mailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required)
    });
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.ourSimpleNameValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      studentId: new FormControl('', [Validators.required, this.SimpleNameValidator]),
      con_password: new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onClick(): void {
    const register: Register = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      studentId: this.registerForm.value.studentId,
      con_password: this.registerForm.value.con_password,
      password: this.registerForm.value.password,
    };
    console.log(register);
    this.studentService.createStudent(register).subscribe(
      value => {console.log(value)},
      error => {console.log(error)},
      ()=> {console.log('Sucessful...')}
    );
    this.router.navigate(['student-list']);
  }

  onSubmit(): void {
    const context: Context = {
      email: this.mailForm.value.email,
      password: this.mailForm.value.password
    };
    console.log(context);
    this.router.navigate(['dashboard']);
  }
  ourSimpleNameValidator(control: AbstractControl): ValidationErrors | null{
    console.log(control);
    if (control.value === 'Mg Oo'){
      return { unvalidName: true};
    }
    return  null;
  }
  SimpleNameValidator(control: AbstractControl): ValidationErrors | null{
    console.log(control);
    if (control.value === '123'){
      return { unvalidstudentId: true};
    }
    return  null;
  }

}

interface Context{
  email: string;
  password: string;
}

interface Register{
  name: string;
  email: string;
  phone: string;
  studentId: string;
  con_password: string;
  password: string;
}
