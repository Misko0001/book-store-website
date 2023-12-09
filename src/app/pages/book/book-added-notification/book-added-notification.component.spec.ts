import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddedNotificationComponent } from './book-added-notification.component';

describe('BookAddedNotificationComponent', () => {
  let component: BookAddedNotificationComponent;
  let fixture: ComponentFixture<BookAddedNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAddedNotificationComponent]
    });
    fixture = TestBed.createComponent(BookAddedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
