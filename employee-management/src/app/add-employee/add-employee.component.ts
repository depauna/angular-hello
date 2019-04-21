import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  user: Employee = new Employee(0,"","","");

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
    .subscribe( data => {
      // alert("Employee created successfully.");
      this.router.navigate(['/'])
    },
    error => {
      alert("Failed to create employee!")
    });
  };

}
