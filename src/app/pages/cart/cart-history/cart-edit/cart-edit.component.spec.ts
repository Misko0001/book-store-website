import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEditComponent } from './cart-edit.component';

describe('CartEditComponent', () => {
  let component: CartEditComponent;
  let fixture: ComponentFixture<CartEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartEditComponent]
    });
    fixture = TestBed.createComponent(CartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
