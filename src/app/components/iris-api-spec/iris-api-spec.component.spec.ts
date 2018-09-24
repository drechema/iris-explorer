import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisApiSpecComponent } from './iris-api-spec.component';

describe('IrisApiSpecComponent', () => {
  let component: IrisApiSpecComponent;
  let fixture: ComponentFixture<IrisApiSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrisApiSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisApiSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
