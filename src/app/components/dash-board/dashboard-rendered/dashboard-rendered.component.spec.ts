import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRenderedComponent } from './dashboard-rendered.component';

describe('DashboardRenderedComponent', () => {
  let component: DashboardRenderedComponent;
  let fixture: ComponentFixture<DashboardRenderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRenderedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
