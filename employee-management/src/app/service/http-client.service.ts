import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'util';
import { environment } from 'src/environments/environment';

export class Employee{
constructor(
    public empId: number,
    public name: string,
    public designation: string,
    public salary: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  apiUrl;

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
     }

  getEmployees() {
    // let username = 'natan'
    // let password = 'depauw'
    // console.log("test call");
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }

  public deleteEmployee(employee) {
    // let username = 'natan'
    // let password = 'depauw'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId,{headers});
    return this.httpClient.delete<Employee>(this.apiUrl + '/' + employee.empId);
  }

  public createEmployee(employee: Employee) {
    // let username = 'natan'
    // let password = 'depauw'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.post<Employee>("http://localhost:8080/employees", employee, {headers})
    // let httpHeaders = new HttpHeaders({
    //   'Content-Type' : 'application/json'
    // });
    // let options = {
    //   headers: httpHeaders
    // };
    return this.httpClient.post<Employee>(this.apiUrl, employee);
  }
}
