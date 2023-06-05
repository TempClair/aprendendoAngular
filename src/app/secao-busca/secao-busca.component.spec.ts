import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoBuscaComponent } from './secao-busca.component';

describe('SecaoBuscaComponent', () => {
  let component: SecaoBuscaComponent;
  let fixture: ComponentFixture<SecaoBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoBuscaComponent]
    });
    fixture = TestBed.createComponent(SecaoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
