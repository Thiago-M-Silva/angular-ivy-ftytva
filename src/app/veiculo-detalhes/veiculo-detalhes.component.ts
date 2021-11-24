import { Component, OnInit, Input } from '@angular/core';
import { veiculo } from '../veiculo';

@Component({
  selector: 'app-veiculo-detalhes',
  templateUrl: './veiculo-detalhes.component.html',
  styleUrls: ['./veiculo-detalhes.component.css'],
})
export class VeiculoDetalhesComponent implements OnInit {
  @Input() veiculo?: veiculo;
  constructor() {}

  ngOnInit() {}
}
