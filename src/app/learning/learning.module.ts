import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';
import { ClassesComponent } from './classes/classes.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { PaymentsComponent } from './payments/payments.component';
import { ShedulesComponent } from './shedules/shedules.component';



@NgModule({
  declarations: [
    LandingComponent,
    StartComponent,
    ClassesComponent,
    CoursesComponent,
    TeachersComponent,
    PaymentsComponent,
    ShedulesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent,
    StartComponent,
    ClassesComponent,
    CoursesComponent,
    TeachersComponent,
    PaymentsComponent,
    ShedulesComponent
  ]
})
export class LearningModule { }
