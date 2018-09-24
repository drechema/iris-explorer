import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IrisApiService } from '../../services/iris-api.service';
import { Api } from '../../objects/api.object';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-iris-api-create',
  templateUrl: './iris-api-create.component.html',
  styleUrls: ['./iris-api-create.component.css']
})
export class IrisApiCreateComponent implements OnInit {
  public form: FormGroup;
  public loading = false;
  @Output() apiCreated = new EventEmitter<Api>();

  constructor(
    private alertService: AlertService,
    private apiService: IrisApiService) {
    this.form = new FormGroup({
      'Namespace': new FormControl('', [Validators.required]),
      'ApplicationName': new FormControl('', [Validators.required]),
      'Specification': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  setSpecification(jsonText: string) {
    this.form.controls['Specification'].patchValue(jsonText);
  }

  cancel() {
    this.apiCreated.emit(null);
  }

  create() {
    const namespace = this.form.controls['Namespace'].value;
    const appName = this.form.controls['ApplicationName'].value;
    let swagger;
    try {
      swagger = JSON.parse(this.form.controls['Specification'].value);
    } catch (ex) {
      this.alertService.error(ex);
      return;
    }
    this.loading = true;
    this.apiService.create(namespace, appName, swagger)
      .then(rsp => {
        this.apiCreated.emit(rsp);
        this.loading = false;
      })
      .catch(error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
