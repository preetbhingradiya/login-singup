import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../service/user.service';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [UserService]
})
export class LoginComponent {

  private loginUserService = inject(UserService)
  constructor(private render:Renderer2){}
  message: string = ''

  @ViewChild("text") para:ElementRef


  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  loginUser() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password


    this.loginUserService.getUser().subscribe((ele) => {
      let reasponse: any = ele
      reasponse.find((ele) => {
        return reasponse = ele.emailValue === email && ele.passwordValue === password
      })

      if (reasponse) {
        this.message = `User is login successfull`
        localStorage.setItem('user',JSON.stringify(reasponse))
        this.render.setStyle(this.para.nativeElement,"color","blue")
      }
      else {
        this.message = `login fail, Please Check Email Or Password`
        this.render.setStyle(this.para.nativeElement,"color","red")
      }
    })

  }
}

