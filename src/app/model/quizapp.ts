export class QuizApp{

  id!: number;

  questionTitle!: string;

  option1!: string;

  option2!: string;

  option3!: string;

  option4!: string;
}

export class QuizResponse{
  id!: number;

  response!: string;
}

export class QuizAppAd{
  id!: number;
  questionTitle!: string;
  option1!: string;
  option2!: string;
  option3!: string;
  option4!: string;
  rightAnswer!: string;
  difficultylevel!: string;
  category!: string;
}

export class CreateQuiz{
  id!: number;
  category!: string;
  numQ!: number;
  title!: string;
}
