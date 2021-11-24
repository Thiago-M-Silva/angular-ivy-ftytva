import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoDetalhesComponent } from './veiculo-detalhes/veiculo-detalhes.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VeiculoComponent, VeiculoDetalhesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
