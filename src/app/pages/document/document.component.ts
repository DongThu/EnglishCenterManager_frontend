import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { English, ManagerDocument } from 'src/app/model/document';
import { DocumentService } from 'src/app/service/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{
  public documents!: ManagerDocument[];


  constructor(
    private documentService: DocumentService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getDocument();
  }

  public getDocument(): void {
    this.documentService.getDocument().subscribe(
      (response: ManagerDocument[]) => {
        this.documents = response;
        console.log(this.documents)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public onDeleteDocument(Id: number): void {
    this.documentService.deleteDocument(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getDocument();
      },
      (error: HttpErrorResponse) => {
        alert("Bạn không thể xóa người này!");
      }
    );
  }
}
