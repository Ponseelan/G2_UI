import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'G2-CROWD';
  employeeDatas: any;
  constructor(private employeeService: AppComponentService) {
    this.employeeDatas = {};
    this.loadData();
  }

  loadData() {
    this.employeeService.getEmployeedata().subscribe((data) => {
      this.employeeDatas = data;
      console.log(this.employeeDatas);
    });
  }
}
