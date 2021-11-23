import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculo/veiculo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VeiculoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
