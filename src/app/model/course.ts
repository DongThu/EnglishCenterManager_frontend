export class Course{
  course_id!: number;
  program!: String ;
  level!: String ;
  price!: number;
  schedule!: String;
  openning!: Date ;
  time!: String ;
}

export class ChildSchedule{
  program!: String ;
  level!: String ;
  price!: number;
  schedule!: String;
  openning!: Date ;
  time!: String ;
  email!: String;
}


