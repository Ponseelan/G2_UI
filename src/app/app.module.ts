import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee-component/employee-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponentService } from './app.component.service';
import { EmployeeService } from './employee-component/employee.service';

@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppComponentService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
