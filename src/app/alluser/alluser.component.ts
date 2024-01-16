import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alluser',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterOutlet,RouterLink],
  templateUrl: './alluser.component.html',
  providers: [UserService]
})
export class AlluserComponent implements OnInit {
  private allUser = inject(UserService)
  loginuser:boolean=false;
  users: any;

  ngOnInit(): void {
    this.allUser.getUser().subscribe((ele) => {
      return this.users = ele
    })
  }

  findUser(){
    this.loginuser=JSON.parse(localStorage.getItem('user'))
    console.log(this.loginuser)
  }
}
