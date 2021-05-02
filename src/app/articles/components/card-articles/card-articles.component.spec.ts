import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticlesComponent } from './card-articles.component';

describe('CardArticlesComponent', () => {
  let component: CardArticlesComponent;
  let fixture: ComponentFixture<CardArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
