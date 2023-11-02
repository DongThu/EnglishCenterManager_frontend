import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAppAd } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-add-manager-quiz',
  templateUrl: './add-manager-quiz.component.html',
  styleUrls: ['./add-manager-quiz.component.css']
})
export class AddManagerQuizComponent {
  question!: QuizAppAd;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizappService: QuizappService){
      this.question = new QuizAppAd();
    }

  ngOnInit(){
    // this.getCourse();
  }
  saveCourse(){
    this.quizappService.addQuestion(this.question).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/manager-quiz']);
  }

  onSubmit(){
    console.log(this.question);
    this.saveCourse();
  }
}
