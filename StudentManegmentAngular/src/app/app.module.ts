import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentAddComponent } from './student-add/student-add.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    StudentAddComponent,
    UploadFileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
