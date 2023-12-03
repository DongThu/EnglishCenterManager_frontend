import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeTable } from 'src/app/model/timetable';
import { TimetableService } from 'src/app/service/timetable.service';
import { VnpayService } from 'src/app/service/vnpay.service';

@Component({
  selector: 'app-timetable-salary',
  templateUrl: './timetable-salary.component.html',
  styleUrls: ['./timetable-salary.component.css']
})
export class TimetableSalaryComponent implements OnInit {
  timetables!: TimeTable;
  timetableId!: number;
  salary!: number;
  public timetable!: TimeTable;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timetableService: TimetableService,
    private vnpayService: VnpayService) { }

  ngOnInit(): void {
    this.timetableId = this.route.snapshot.params['timetableId'];
    console.log("timetableId:", this.timetableId);
    this.calculateSalary(this.timetableId);
    // this.getTimeTableId(this.timetableId);
  }

  calculateSalary(timetableId: number) {
    this.timetableService.calculateSalary(timetableId).subscribe(
      result => {
        this.salary = result;
        console.log(this.salary)
      },
      error => {
        // Xử lý lỗi nếu có
      }
    );
  }

  // public getTimeTableId(id: number): void {
  //   this.timetableService.getTimeTableId(id).subscribe(
  //     (response: TimeTable) => {
  //       this.timetables = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  getPaymentService(price: number, id: number) {

    this.vnpayService.getPaymentService(price, id).subscribe({
      next: (response: string) => {
        window.location.href = response;
      },
      error: (error) => {
        // Swal.fire('Có lỗi!', error.error.message, 'error');
        console.log(error);
      },
    });
  }

}
