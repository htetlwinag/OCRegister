import { Component, OnInit } from '@angular/core';
import { StudentList, StudentsService} from '../service/students.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  closeResult: string;
  students: StudentList;
  errorCode: any;
  message: string
  result: object;
  updateForm: FormGroup;

  updateResult: any;
  idToDelete: number;
  idToUpdate: number;
  idUpdate: number;

  name: string;
  email: string;
  phone: string;
  address: string;
  birthDate: any;
  stdId: string;
  updateD: object;

  res: any;

  student: Result[];
  dOption: DataTables.Settings = {};

  constructor(public studentService: StudentsService, public http: HttpClient,
              public route: ActivatedRoute, private modalService: NgbModal,
              private router: Router) {
    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      studentId: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      value => {
        console.log(value);
        this.errorCode= value.errorCode;
        this.message=value.message;
        this.result=value.result;
      },
      error => console.log(error),
      ()=> console.log("Successful..........!")
    );

    this.studentService.getStudents().subscribe(value =>{
      this.students =value;
      console.log(value.message);
    })
  }

  onOpen(close, id: number) {
    this.idToDelete = id;
    this.modalService.open(close, {ariaLabelledBy: 'modalTitle'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onUpdate(): void {
    const up: Update = {
      id: this.idToUpdate,
      name: this.updateForm.value.name,
      email: this.updateForm.value.email,
      phone: this.updateForm.value.phone,
      studentId: this.updateForm.value.studentId,
      address: this.updateForm.value.address,
      birthDate: this.updateForm.value.birthDate
    }
    this.res=up;
    // console.log(up);
    this.updateResult=up;
    this.studentService.updateStudent(this.updateResult).subscribe(
      value => {
        value=this.updateResult;
        console.log(value);
      },
      error => {console.log(error)}
    );
  }

  open(content, update: Result) {
    this.idToUpdate = update.id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.updateForm.reset(update);
    console.log(update);
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.idToDelete)
      .subscribe(
        value => {
          console.log(value);
          this.studentService.getStudents().subscribe(value =>{
            this.students =value
            console.log(value.message)
          })
        },
        error => console.log(error));
    console.log(this.idToDelete);
    // this.router.navigate(['student-list']);
  }



  onShow(detail, res: Result) {
    this.modalService.open(detail, {ariaLabelledBy: 'detailModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.name= res.name;
    this.email= res.email;
    this.phone= res.phone;
    this.address= res.address;
    this.birthDate= res.birthDate;
    this.stdId= res.studentId;
    console.log(res.name)
    console.log(res.email)
  }

}

interface Update {
  id: number;
  name: string;
  email: string;
  phone: string;
  studentId: string;
  address: string;
  birthDate: any;
}

interface Result {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  studentId: string;
}
