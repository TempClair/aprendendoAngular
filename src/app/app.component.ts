import { Component } from '@angular/core';
import { SecaoBuscaComponent } from './secao-busca/secao-busca.component';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Meu aplicativo';
  mensagem = 'Essa mensagem está sendo buscada no export class de app.component.ts';
}
