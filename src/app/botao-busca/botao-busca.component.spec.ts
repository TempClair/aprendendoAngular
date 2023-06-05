import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoBuscaComponent } from './botao-busca.component';

describe('BotaoBuscaComponent', () => {
  let component: BotaoBuscaComponent;
  let fixture: ComponentFixture<BotaoBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoBuscaComponent]
    });
    fixture = TestBed.createComponent(BotaoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
