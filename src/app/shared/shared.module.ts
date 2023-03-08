import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { MessageErrorComponent } from './message-error/message-error.component';
import { MessageSuccessfulComponent } from './message-successful/message-successful.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ContentComponent,
    MessageErrorComponent,
    MessageSuccessfulComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    ContentComponent
  ]
})
export class SharedModule { }
