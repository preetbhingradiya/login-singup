import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url='http://localhost:3000/studentData'

  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get(this.url)
  }

  postStudent(data:any){
    return this.http.post(this.url,data)
  }

  editStudent(data:any,id:any){
    let updateurl=`${this.url}/${id}`
    this.http.put(updateurl,id)
  }

  deleteStudent(id:any){
    let deleteurl=`${this.url}/${id}`
    return this.http.delete(deleteurl)
  }
}
