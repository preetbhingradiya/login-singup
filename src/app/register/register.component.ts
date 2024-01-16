import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidation } from '../validation/custom.validation';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterOutlet,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers:[UserService]
})
export class RegisterComponent {

  private userService=inject(UserService)

  registerForm=new  FormGroup({
    username:new FormControl(null,[Validators.required,customValidation.noSpaceAllowed]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required])
  })

  registerUser(){
    let userValue=this.registerForm.value.username;
    let emailValue=this.registerForm.value.email;
    let passwordValue=this.registerForm.value.password

    let userData={
      userValue,
      emailValue,
      passwordValue
    }

    this.userService.postUser(userData).subscribe((ele)=>{
      console.log(ele)
      this.AllUser()
    })
  }

  AllUser(){
    this.userService.getUser().subscribe((ele)=>{
      console.log(ele)
    })
  }
}
