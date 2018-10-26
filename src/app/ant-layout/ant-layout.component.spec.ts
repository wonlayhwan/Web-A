import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntLayoutComponent } from './ant-layout.component';

describe('AntLayoutComponent', () => {
  let component: AntLayoutComponent;
  let fixture: ComponentFixture<AntLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
