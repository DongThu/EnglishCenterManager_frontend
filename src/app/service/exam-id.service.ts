import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamIdService {

  private examId!: number;

  constructor() { }

  setExamId(id: number) {
    this.examId = id;
  }

  getExamId() {
    return this.examId;
  }
}
