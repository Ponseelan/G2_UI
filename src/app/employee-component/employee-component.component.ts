import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css'],
})
export class EmployeeComponent implements OnInit {
  public name: String;
  public title: String;
  public bio: String;
  public image_url: String;
  public numberOfVotes: number;
  public hideVoteIcon: Boolean;
  @Input() employee: any;
  constructor(private employeeService: EmployeeService) {
    this.name = '';
    this.title = '';
    this.bio = '';
    this.image_url = '';
    this.numberOfVotes = 0;
    this.hideVoteIcon = false;
  }

  ngOnInit(): void {
    this.name = this.employee.name;
    this.title = this.employee.title;
    this.bio = this.employee.bio;
    this.image_url = this.employee.image_url;
    this.numberOfVotes = this.employee.numberOfVotes;
  }
  vote() {
    console.log('voted for' + this.name);
    this.employeeService.vote(this.name).subscribe((data: any) => {
      this.numberOfVotes = data.value;
      this.hideVoteIcon = true;
      console.log(this.hideVoteIcon);
    });
  }
}
