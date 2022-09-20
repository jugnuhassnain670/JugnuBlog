import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UssComponent } from './uss.component';

describe('UssComponent', () => {
  let component: UssComponent;
  let fixture: ComponentFixture<UssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
