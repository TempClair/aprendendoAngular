import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecaoBuscaComponent } from './secao-busca/secao-busca.component';
import { InputNumericoComponent } from './input-numerico/input-numerico.component';
import { BotaoBuscaComponent } from './botao-busca/botao-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    SecaoBuscaComponent,
    InputNumericoComponent,
    BotaoBuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
