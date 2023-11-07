export class Teacher{
  id!: number;
  msgv!: String ;
  fullName!: String ;
  phone!: number;
  // image!: String ;
  birthDay!: Date;
  email!: String ;
  address!: String ;
  teachProgram!: string;
  levelSalary!: number;
}


export class TeacherSchedule{
  id!: number;
  startTime!: Date;
  endTime!: Date;
}

export class TeacherScheduleList {
  id!: number;
  teacher!: {
    id: number;
    fullName: string;
  };
  startTime!: string;
  endTime!: string;
}

