import { Component, Input } from '@angular/core';
import { ContainerDados } from '../container-dados'

@Component({
  selector: 'app-item-linha',
  templateUrl: './item-linha.component.html',
  styleUrls: ['./item-linha.component.css']
})
export class ItemLinhaComponent {
  @Input() containerDados!: ContainerDados;
}
