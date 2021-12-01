import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { veiculo } from '../veiculo';
import { MensagensService } from '../mensagens.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
})
export class VeiculoComponent implements OnInit {
  selectedVeiculo?: veiculo;

  veiculos: veiculo[] = [];

  constructor(
    private veiculoService: VeiculoService,
    private mensagensService: MensagensService
  ) {}

  ngOnInit(): void {
    this.getVeiculos();
  }

  onSelect(veiculo: veiculo): void {
    this.selectedVeiculo = veiculo;
    this.mensagensService.add(
      'VeiculoComponent: Veiculo selecionado id=${veiculo.id}'
    );
  }

  getVeiculos(): void {
    this.veiculoService
      .getVeiculos()
      .subscribe((veiculos) => (this.veiculos = veiculos));
  }
}
