import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  form: FormGroup;
  loading = false;
  @Input() caption = 'Upload';
  @Output() fileSelected = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
      this.form = this.fb.group({
          file: null
      });
  }

  onFileChange(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
          const file = event.target.files[0];
          reader.readAsText(file);
          reader.onload = () => {
              this.fileSelected.emit(reader.result.toString());
          };
      }
  }

}
