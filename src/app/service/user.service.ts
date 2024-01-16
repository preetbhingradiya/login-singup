import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:3000/userData'

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.url)
  }

  postUser(data:any){
    return this.http.post(this.url,data)
  }
}
