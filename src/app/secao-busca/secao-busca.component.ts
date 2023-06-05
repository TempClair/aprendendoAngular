import { Component } from '@angular/core';
import { InputNumericoComponent } from '../input-numerico/input-numerico.component';
import { BotaoBuscaComponent } from '../botao-busca/botao-busca.component';

@Component({
  selector: 'app-secao-busca',
  templateUrl: './secao-busca.component.html',
  styleUrls: ['./secao-busca.component.css']
})
export class SecaoBuscaComponent {
  mensagem="o botão foi tocado";
  alerta(id: string): void {
    alert(id);
  }
}
