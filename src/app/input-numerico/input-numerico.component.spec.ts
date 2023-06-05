import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumericoComponent } from './input-numerico.component';

describe('InputNumericoComponent', () => {
  let component: InputNumericoComponent;
  let fixture: ComponentFixture<InputNumericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNumericoComponent]
    });
    fixture = TestBed.createComponent(InputNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
