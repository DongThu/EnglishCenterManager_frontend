export class TimeTable {
  id!: number;
  classroom!: String;
  course!:{
    program: String;
    openning: Date;
    schedule: String;
  };
  teacher!: {
    fullName: string;
  };
}

export class TimeTableInput {
    courseId!: number;
    classroom!: String;
    // program!: String;
    // openning!: Date;
    teacherId!: number;

}
