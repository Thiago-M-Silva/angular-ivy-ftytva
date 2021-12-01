import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { veiculo } from '../veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
})
export class VeiculoComponent implements OnInit {
  selectedVeiculo?: veiculo;

  veiculos: veiculo[] = [];

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.getVeiculos();
  }

  onSelect(veiculo: veiculo): void {
    this.selectedVeiculo = veiculo;
  }

  getVeiculos(): void {
    this.veiculos = this.veiculoService.getVeiculos();
  }
}
