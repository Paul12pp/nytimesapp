import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSevenComponent } from './last-seven.component';

describe('LastSevenComponent', () => {
  let component: LastSevenComponent;
  let fixture: ComponentFixture<LastSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
