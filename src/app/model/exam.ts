export class Exam{
  id!: number;
  course!: {
    course_id: number;
    english: {
        id: number;
        englishName: string;
    },
    program: string;
    level: string,
    price: number,
    schedule: string,
    openning: Date,
    time: String;
  }
  quiz!: {
    id: number,
    title: String,
  }
}

export class ExamInput{

  courseId!: number;
  quizId!: number;
}

export class examStudent{
  // id!: number;
  //       user!: {
  //           id: number;
  //           // name: string;
  //           // username: string,
  //       };
  //       exam!: {
  //           id: number,
  //           // course: {
  //           //     course_id: number,
  //           //     english: {
  //           //         id: number,
  //           //         englishName: string
  //           //     },
  //           //     program: string,
  //           //     level: string,
  //               // "price": 1200000.0,
  //               // "schedule": "18h (357)",
  //               // openning: Date,
  //               // "time": "12 tuần"
  //           // },
  //           // quiz: {
  //           //     id: number,
  //           //     title: string,

  //           // }
  //       };
      userId!: number;
      examId!: number;
      score!: number
    }

    export class examStudentResult{
      id!: number;
            user!: {
                id: number;
                name: string;
                username: string,
            };
            exam!: {
                id: number,
                course: {
                    course_id: number,
                    english: {
                        id: number,
                        englishName: string
                    },
                    program: string,
                    level: string,
                    // "price": 1200000.0,
                    // "schedule": "18h (357)",
                    openning: Date,
                    // "time": "12 tuần"
                },
                quiz: {
                    id: number,
                    title: string,

                }
            };
          // userId!: number;
          // examId!: number;
          score!: number
        }

