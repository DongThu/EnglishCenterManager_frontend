export class Course{
  id!: number;
  start_time!: Date ;
  description!: String ;
  price!: number;
  courseType!: courseType ;
  level!: level ;
  period!: period ;
}
export class courseType{
  id!: number;
  courseTypeName!: String ;
}

export class level{
  id!: number;
  levelName!: String ;
}
export class period{
  periodName!: String ;
}
