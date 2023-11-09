import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
  public examStudent!: number;

  public totalSalary!: number;

  public profit!: number;
  constructor(
    private AddCourseService: ReportService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getCourse();
    this.getSalary();
    this.getProfit();
  }

  public getCourse(): void {
    this.AddCourseService.getRevenue().subscribe(
      (response: number) => {
        this.examStudent = response;
        console.log(this.examStudent)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getSalary(): void {
    this.AddCourseService.getSalary().subscribe(
      (response: number) => {
        this.totalSalary = response;
        console.log(this.totalSalary)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProfit(): void {
    this.AddCourseService.getProfit().subscribe(
      (response: number) => {
        this.profit = response;
        console.log(this.profit)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

