import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFeedingComponent } from './cross-feeding.component';

describe('CrossFeedingComponent', () => {
  let component: CrossFeedingComponent;
  let fixture: ComponentFixture<CrossFeedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFeedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
