import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyOrderMaterialsComponent } from './ready-order-materials.component';

describe('ReadyOrderMaterialsComponent', () => {
  let component: ReadyOrderMaterialsComponent;
  let fixture: ComponentFixture<ReadyOrderMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyOrderMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyOrderMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
