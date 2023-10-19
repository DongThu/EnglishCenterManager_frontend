import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-app-result',
  templateUrl: './quiz-app-result.component.html',
  styleUrls: ['./quiz-app-result.component.css']
})
export class QuizAppResultComponent {

  result: any;
  countdown!: number;
  timer: any;
  
  ngOnInit() {
    this.result = history.state.result;
    // console.log(result);
  }

  startCountdown() {
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.timer);
        // Xử lý khi hết thời gian
      }
    }, 1000); // Đếm mỗi giây
  }
}
