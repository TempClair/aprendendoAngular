import { Component } from '@angular/core';
import { InputNumericoComponent } from '../input-numerico/input-numerico.component';
import { BotaoBuscaComponent } from '../botao-busca/botao-busca.component';
import { ContainerDados } from '../container-dados';

@Component({
  selector: 'app-secao-busca',
  templateUrl: './secao-busca.component.html',
  styleUrls: ['./secao-busca.component.css']
})
export class SecaoBuscaComponent {
  containerDadosList : ContainerDados[] = [
    {id:1, nome:"Homer Simpson", cpf:"123.456.789-09"},
    {id:2, nome:"William Wallace", cpf:"987.654.321-01"},
    {id:3, nome:"Dora Peterson", cpf:"135.246.357-48"},
    {id:4, nome:"Vera Walters", cpf:"975.864.753-64"},
  ]
}
