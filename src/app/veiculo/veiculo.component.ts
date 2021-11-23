import { Component, OnInit } from '@angular/core';
import { veiculo } from '../veiculo';
import { VEICULOS } from '../lista-veiculos';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
})
export class VeiculoComponent implements OnInit {
  veiculo: veiculo[] = VEICULOS;

  selectedVeiculo?: veiculo;

  constructor() {}

  onSelect(veiculo: veiculo): void {
    this.selectedVeiculo = veiculo;
  }
  ngOnInit() {}
}
