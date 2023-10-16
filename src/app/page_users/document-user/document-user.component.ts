import { Component } from '@angular/core';
import { ChildSchedule } from 'src/app/model/course';
import { ManagerDocument } from 'src/app/model/document';
import { Auth } from 'src/app/model/register-course';
import { DocumentService } from 'src/app/service/document.service';
import { LoginUserService } from 'src/app/service/login-user.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-document-user',
  templateUrl: './document-user.component.html',
  styleUrls: ['./document-user.component.css','../home-user/home-user.component.css']
})
export class DocumentUserComponent {
  user!: ChildSchedule[];
  users!: Auth;
  userId!: number;
  document!: ManagerDocument;

  constructor(private userService: RegisterCourseService,
    private auth: LoginUserService,
    private documentService: DocumentService
    ) { }

  ngOnInit() {
    const username = this.auth.getUsername();
    console.log(username);
    // tìm kiếm id user bằng email
    this.userService.getUserByEmail(username)
      .subscribe((response: any) => {
        if (response) {
          this.userId = response;
          console.log(this.userId);
      // tìm kiếm thông tin đăng ký khóa học của user bằng id user
          this.userService.getRegisterUserChild(this.userId).subscribe(
            ((reponse: any) => {
              if(reponse){
                this.user = reponse;
                console.log(this.user);

                // nếu khóa học của user tồn tại thì tiếp tục lấy id chương trình tiếng anh khóa học của user đó đã đăng ký
                if (this.user && this.user.length > 0) {
                  const courseId = this.user[0].course.english.id;
                  console.log(courseId);
                  // console.log("có");

                  this.documentService.getDocumentEnglishId(courseId).subscribe((timetableId: number) => {
                    console.log(timetableId);
                    // In ra giá trị number
                  this.getDocumentEnglishId(timetableId);

                  });


                }
                else {
                  console.log("this.user is not defined or empty");
                }
              }
              else {
                console.log("Không tìm thấy lớp học!")
              }
            })
          )

        } else {
          console.log("Không tìm thấy người dùng");
        }
      });






  }


  getDocumentEnglishId(id: number): void {
    this.documentService.getDocumentById(id)
      .subscribe(response => {
        this.document = response;
        console.log(this.document)
      });
  }

  downloadDocument(nameDocument: string) {
    this.documentService.Download(nameDocument).subscribe((response: any) => {
      const blob = new Blob([response], { type: 'application/pdf' });

      // Tạo một đường dẫn tạm thời để tải xuống tệp
      const url = window.URL.createObjectURL(blob);

      // Tạo một thẻ a ẩn để kích hoạt sự kiện tải xuống
      const a = document.createElement('a');
      a.href = url;
      a.download = nameDocument;
      a.click();

      // Giải phóng đường dẫn tạm thời
      window.URL.revokeObjectURL(url);
    });
  }
}
