import { Injectable } from '@angular/core';

@Injectable()
export class MensagensService {
  mensagem: string[] = [];
  add(mensagens: string) {
    this.mensagem.push(mensagens);
  }

  clear() {
    this.mensagem = [];
  }
}
