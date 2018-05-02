import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  @ViewChild('imageProfile') el:ElementRef;
  filesToUpload: Array<File> = [];

  constructor(private http: Http) {
    document.body.style.backgroundImage = 'url("../../assets/Images/Profile-BG.jpg")';
  }

  ngOnInit() {
  }

  ngOnDestroy () {
    document.body.style.backgroundImage = 'none';
  }

  ngAfterViewInit() {
    this.setImage();
  }

setImage(){
    this.el.nativeElement.src = 'http://localhost:8080/api/profileImage';
}

upload() {
        const formData: any = new FormData();
        var file:any;
        const files: Array<File> = this.filesToUpload;
        console.log(files);

        for(let i =0; i < files.length; i++){
            formData.append("uploads[]", files[i], 'profile-avatar.jpg');
        }
        console.log('form data variable :   '+ formData.toString());
        this.http.post('http://localhost:8080/api/upload', formData)
            .map(files => files.json())
            .subscribe(files => {
                file = files;
                console.log('file uploaded');
                this.el.nativeElement.src = null; 
                setTimeout(() => {
                    this.setImage();
                }, 100);
            });
      
}

fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  //this.product.photo = fileInput.target.files[0]['name'];
}

}
