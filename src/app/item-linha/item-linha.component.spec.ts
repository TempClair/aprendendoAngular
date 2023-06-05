import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLinhaComponent } from './item-linha.component';

describe('ItemLinhaComponent', () => {
  let component: ItemLinhaComponent;
  let fixture: ComponentFixture<ItemLinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemLinhaComponent]
    });
    fixture = TestBed.createComponent(ItemLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
