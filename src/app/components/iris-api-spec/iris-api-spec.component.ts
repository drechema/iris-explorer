import { Component, Input, OnInit, OnChanges, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { IrisApiService } from '../../services/iris-api.service';
import { Api } from '../../objects/api.object';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-iris-api-spec',
  templateUrl: './iris-api-spec.component.html',
  styleUrls: ['./iris-api-spec.component.css']
})
export class IrisApiSpecComponent implements OnInit, OnChanges {
  @Input() api: Api;
  @Output() viewEnded = new EventEmitter<Api>();
  public loading = false;
  public swaggerSpec: any;
  public swaggerString: string;
  @ViewChild('myInput', { read: ViewContainerRef }) myInput;

  constructor(
    private alertService: AlertService,
    private apiService: IrisApiService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.api) {
      this.loadSpecification();
    }
  }

  loadSpecification() {
    this.loading = true;
    this.apiService.getSpecification(this.api.namespace, this.api.name)
      .then(rsp => {
        this.swaggerSpec = rsp;
        this.swaggerString = JSON.stringify(rsp).trim();
        this.loading = false;
      })
      .catch(error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  cancel() {
    this.viewEnded.emit(null);
  }

  copyToClipboard() {
    this.myInput.element.nativeElement.focus();
    this.myInput.element.nativeElement.select();
    document.execCommand('copy');
  }

  download() {
    this.saveToFile(this.api.name + '.swagger.json', this.swaggerString);
  }

  saveToFile(filename, text) {
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }
}
