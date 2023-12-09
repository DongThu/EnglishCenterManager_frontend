import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateQuiz } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-add-exam-topic',
  templateUrl: './add-exam-topic.component.html',
  styleUrls: ['./add-exam-topic.component.css']
})
export class AddExamTopicComponent {
  question!: CreateQuiz;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizappService: QuizappService){
      this.question = new CreateQuiz();
    }

  ngOnInit(){
    // this.getCourse();
  }
  saveCourse(){
    this.quizappService.addQuiz(this.question).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error =>{
      console.log(error);
      this.goToCourseList();
    });

  }

  goToCourseList(){
    this.router.navigate(['/exam-topic']);
  }

  onSubmit(){
    console.log(this.question);
    this.saveCourse();
  }
}

