import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DesignComponent } from './design/design.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
  
    DesignComponent,
    UserComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
