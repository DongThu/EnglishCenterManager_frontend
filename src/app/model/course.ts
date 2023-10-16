export class Course{
  id!:  number;
  course_id!: number;
  program!: String ;
  level!: String ;
  price!: number;
  schedule!: String;
  openning!: Date ;
  time!: String ;
  english!: {
    englishName: String;
};
}

export class ChildSchedule{
  id!: number;
  user!: {
    username: String;
    phone:number;
  };
  course!:{
    course_id: number;
    english: {
      id: number;
      englishName: String;
  };
    program: String ;
    level: String ;
    price: number;
    schedule: String;
    openning: Date ;
    time: String ;
  };

  status!: number;

}


