import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerDocument, ManagerDocumentUp } from 'src/app/model/document';
import { DocumentService } from 'src/app/service/document.service';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent {
  document!: ManagerDocumentUp;
  // nameDocument: string = '';
  // nameD!: string
  // typeD!: string;

  constructor(
    private router: Router,
    private documentService: DocumentService){
      this.document = new ManagerDocumentUp();
    }

  ngOnInit(){
  }




  uploadDocument( nameDocument: File, nameD: string, typeD: string) {
    this.documentService.uploadDocument(nameDocument, nameD, typeD).subscribe( data =>{
      console.log(data);
      alert("Thêm dữ liệu thành công!");
      this.goToCourseList();
    },
    error => {
      console.log(error);
      alert('Thêm dữ liệu thất bại');
    })
  }
  goToCourseList(){
    this.router.navigate(['/document']);
  }



onFileSelect(event: any): void {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.document.nameDocument = file;
  }
}

onSubmit(){
  console.log(this.document);
  this.uploadDocument( this.document.nameDocument,this.document.nameD, this.document.typeD);
}


}
