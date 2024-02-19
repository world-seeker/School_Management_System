import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { HomeModule } from './home/home.module';
import { MarksModule } from './marks/marks.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    TeachersModule,
    HomeModule,
    MarksModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
