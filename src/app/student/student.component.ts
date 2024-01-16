import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { StudentService } from '../service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidation } from '../validation/custom.validation';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './student.component.html',
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  private student = inject(StudentService)
  students: any;
  isEditing: boolean = false;
  isEditingID: number;

  rollno:number
  name:string;
  std:number

  @ViewChild('roll') editRoll:ElementRef
  @ViewChild('name') editName:ElementRef
  @ViewChild('std') editStd:ElementRef

  studentForm=new  FormGroup({
    rollno:new FormControl(null,[Validators.required]),
    name:new FormControl(null,[Validators.required,customValidation.noSpaceAllowed]),
    gender:new FormControl(null,[Validators.required]),
    std:new FormControl(null,[Validators.required])
  })



  ngOnInit() {
    this.student.getStudent().subscribe((ele) => {
      this.students = ele
    })
  }

  PostStudent(){
    let rollValue=this.studentForm.value.rollno;
    let nameValue=this.studentForm.value.name;
    let genderValue=this.studentForm.value.gender;
    let stdValue=this.studentForm.value.std;

    let studentData={
      rollValue,
      nameValue,
      genderValue,
      stdValue
    }

    this.student.postStudent(studentData).subscribe((ele)=>{
      this.students.push(ele)
    })
  }

  DeleteStudent(id:any){
    this.student.deleteStudent(id).subscribe((ele)=>{
      this.students.pop(ele)
    })
  }

  EditClick(id:any,data:any){
    this.isEditingID=id
    this.isEditing=true

    this.rollno=data.rollValue
    this.name=data.nameValue
    this.std=data.stdValue
  }

  EditStudent(){

  }
}
