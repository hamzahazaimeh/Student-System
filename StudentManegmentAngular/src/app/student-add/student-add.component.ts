import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  public response: { dbPath: ''; } | any;
  constructor(public service:StudentService) { }

  ngOnInit(): void {
    this.service.student={
      id:0,
      name:null,
      registrationNumber:null,
      grade:null,
      image:null
    }
  }
  public uploadFinished = (event: any) => {
    this.response = event;
    this.service.student.image=event.dbPath;

  }
  
  submit(){
    if(this.service.student.id==0){
      this.service.postStudent().subscribe(res=>{
        this.service.getallStudents()
  
      },
      err=>{
        console.log(err)
  
      })
    }
    else{
      this.service.putStudent().subscribe(res=>{
        this.service.getallStudents()
  
      },
      err=>{
        console.log(err)
  
      })
    }
    

  }

}
