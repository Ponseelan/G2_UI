import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppComponentService {
  constructor(private http: HttpClient) {}
  getEmployeedata() {
    return this.http.get(environment.SERVICE_URL + '/employee');
  }
}
