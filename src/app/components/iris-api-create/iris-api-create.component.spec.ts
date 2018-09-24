import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisApiCreateComponent } from './iris-api-create.component';

describe('IrisApiCreateComponent', () => {
  let component: IrisApiCreateComponent;
  let fixture: ComponentFixture<IrisApiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrisApiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisApiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
