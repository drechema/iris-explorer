import {AfterViewInit, Component, ElementRef, Input, OnChanges} from '@angular/core';

const SwaggerUI = require('swagger-ui');

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class SwaggerComponent implements OnChanges {

  // JSON object containing the spec
  @Input() swaggerSpec: any;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    const ui = SwaggerUI({
      spec: this.swaggerSpec,
      domNode: this.el.nativeElement.querySelector('.swagger-container'),
      deepLinking: true,
      presets: [
        SwaggerUI.presets.apis
      ],
    });
  }
}
