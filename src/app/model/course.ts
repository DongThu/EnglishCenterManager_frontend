export class Course{
  id!:  number;
  course_id!: number;
  program!: String ;
  level!: String ;
  price!: number;
  schedule!: String;
  openning!: Date ;
  time!: String ;
}

export class ChildSchedule{
  id!: number;
  user!: {
    username: String;
    phone:number;
  };
  course!:{
    program: String ;
    level: String ;
    price: number;
    schedule: String;
    openning: Date ;
    time: String ;
  };


}


