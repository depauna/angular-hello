import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'util';

export class Employee{
constructor(
    public empId:number,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {
     }

     getEmployees()
  {
    // let username = 'natan'
    // let password = 'depauw'
    // console.log("test call");
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee) {
    // let username = 'natan'
    // let password = 'depauw'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId,{headers});
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);
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
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee)
  }
}
