export class TimeTable {
  id!: number;
  classroom!: string;
  course!:{
    program: string;
    openning: Date;
    schedule: string;
  };
  teacher!: {
    id: number;
    fullName: string;
  };
  status!: number;
}

export class TimeTableInput {
    id!: number;
    courseId!: number;
    classroom!: String;
    // program!: String;
    // openning!: Date;
    teacherId!: number;

}
