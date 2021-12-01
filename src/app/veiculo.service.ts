import { Injectable } from '@angular/core';
import { veiculo } from './veiculo';
import { VEICULOS } from './lista-veiculos';
import { Observable, of } from 'rxjs';
import { MensagensService } from './mensagens.service';

@Injectable()
export class VeiculoService {
  constructor(private messagensService: MensagensService) {}

  getVeiculos(): Observable<veiculo[]> {
    const veiculos = of(VEICULOS);
    return veiculos;
  }
}
