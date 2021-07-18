import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentAddComponent } from '../student-add/student-add.component';
import {DialogService} from 'primeng/dynamicdialog';
import { Student } from '../student.model';



@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {


  
  name:string | any
  public response: { dbPath: ''; } | any;
  

  constructor(public service:StudentService) { }

  ngOnInit(): void {
    this.service.getallStudents();
  }

 

  
  fillData(item: { id: any; name: any; registrationNumber: any; grade: any; image: any; }){
    this.service.student.id=item.id;
    this.service.student.name=item.name;
    this.service.student.registrationNumber=item.registrationNumber;
    this.service.student.grade=item.grade;
    this.service.student.image=item.image;
  }
  delete(id:any){
    this.service.deleteStudent(id).subscribe(res=>{
      this.service.getallStudents()
    })

  }
  Search(){
    
    this.service.students=this.service.students.filter((res: { name: string; }) =>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
    })
  }

  
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44352/${serverPath}`;
  }

 


}
