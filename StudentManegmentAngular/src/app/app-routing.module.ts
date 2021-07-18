import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentInfoComponent } from './student-info/student-info.component';

const approut = [
  {path:"Add",component:  StudentAddComponent},
{
  path:'',
  redirectTo:'student-info',
  pathMatch:'full'
},
{path:"info",component:  StudentInfoComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(approut)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
