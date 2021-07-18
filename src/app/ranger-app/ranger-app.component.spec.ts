import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangerAppComponent } from './ranger-app.component';

describe('RangerAppComponent', () => {
  let component: RangerAppComponent;
  let fixture: ComponentFixture<RangerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
