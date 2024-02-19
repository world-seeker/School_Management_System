import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkListComponent } from './mark-list/mark-list.component';
import { MarkDetailsComponent } from './mark-details/mark-details.component';
import { MarkFormComponent } from './mark-form/mark-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';






@NgModule({
  declarations: [
    MarkListComponent,
    MarkDetailsComponent,
    MarkFormComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MarksModule { }
