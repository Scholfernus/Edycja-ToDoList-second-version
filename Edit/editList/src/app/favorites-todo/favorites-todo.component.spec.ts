import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesTodoComponent } from './favorites-todo.component';

describe('FavoritesTodoComponent', () => {
  let component: FavoritesTodoComponent;
  let fixture: ComponentFixture<FavoritesTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesTodoComponent]
    });
    fixture = TestBed.createComponent(FavoritesTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
