import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string="https://localhost:44352/api/studentinfoes"
  students:Student[] | any
  student:Student[] | any

  constructor(private http:HttpClient) { }
  getallStudents(){
    this.http.get(this.url).toPromise().then(
      res =>{
        this.students=res as Student[];
      }
    )
  }


  postStudent(){
    return this.http.post(this.url,this.student);
  }

  putStudent(){
    return this.http.put(this.url+"/"+this.student.id,this.student);
  }
  deleteStudent(id:any){
    return this.http.delete(this.url+"/"+id);
  }
}
